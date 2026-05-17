// Fetch album metadata from Spotify and cache it in data/album-cache.json.
// Runs automatically before `next build` (see "prebuild" in package.json).
// Only fetches albums not already in the cache, so adding one album = one fetch.
//
// Run manually:  npm run prebuild
// Force refresh: npm run prebuild -- --refresh

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { albums, type AlbumEntry } from "../albums.ts";

const CACHE_PATH = "data/album-cache.json";
const CONCURRENCY = 8;
const REFRESH = process.argv.includes("--refresh");

export interface CachedMeta {
  title: string;
  artist: string;
  thumbnail: string;
}

async function main() {
  const cache = loadCache();
  const spotifyEntries = albums.filter(
    (a): a is Extract<AlbumEntry, { spotify: string }> => "spotify" in a
  );
  const urls = [...new Set(spotifyEntries.map((a) => a.spotify))];
  const todo = REFRESH ? urls : urls.filter((u) => !cache[u]);

  if (todo.length === 0) {
    console.log(`album-cache: ${urls.length} albums, all cached`);
    return;
  }
  console.log(`album-cache: fetching ${todo.length} / ${urls.length} albums…`);

  let done = 0;
  const failed: string[] = [];
  await mapWithConcurrency(todo, async (url) => {
    const meta = await fetchAlbumMeta(url);
    if (meta) {
      cache[url] = meta;
    } else {
      failed.push(url);
    }
    done++;
    if (done % 25 === 0 || done === todo.length) {
      process.stdout.write(`  ${done}/${todo.length}\n`);
    }
  }, CONCURRENCY);

  // Prune cache entries no longer in albums.ts
  const live = new Set(urls);
  for (const key of Object.keys(cache)) if (!live.has(key)) delete cache[key];

  mkdirSync(dirname(CACHE_PATH), { recursive: true });
  writeFileSync(CACHE_PATH, JSON.stringify(cache, sortKeys, 2) + "\n");
  console.log(`album-cache: wrote ${Object.keys(cache).length} entries to ${CACHE_PATH}`);

  if (failed.length > 0) {
    console.warn(`album-cache: FAILED to fetch ${failed.length} albums:`);
    for (const f of failed) console.warn(`  ${f}`);
    process.exitCode = 1;
  }
}

function loadCache(): Record<string, CachedMeta> {
  if (!existsSync(CACHE_PATH)) return {};
  try {
    return JSON.parse(readFileSync(CACHE_PATH, "utf8"));
  } catch {
    return {};
  }
}

function sortKeys(_key: string, value: unknown) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
  }
  return value;
}

// ── Spotify OG scraping ─────────────────────────────────────────────────────

async function fetchAlbumMeta(spotifyUrl: string): Promise<CachedMeta | null> {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(spotifyUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (res.status === 429) {
        const wait = Number(res.headers.get("retry-after")) || 2 ** attempt * 5;
        await sleep(Math.min(wait, 60) * 1000);
        continue;
      }
      if (!res.ok) return null;
      const html = await res.text();
      const og = (prop: string) => {
        const raw = html.match(new RegExp(`<meta property="og:${prop}" content="([^"]*)"`))?.[1];
        return raw ? decodeEntities(raw) : undefined;
      };
      const rawTitle = og("title");
      const description = og("description");
      const title = cleanTitle(rawTitle?.split(/ - (?:Album|Single|EP|Compilation) by /)[0]);
      const artist = description?.split("·")[0]?.trim();
      const thumbnail = og("image");
      if (!title || !artist || !thumbnail) return null;
      return { title, artist, thumbnail };
    } catch {
      await sleep(1000);
    }
  }
  return null;
}

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
  "&apos;": "'",
};

function decodeEntities(s: string): string {
  return s.replace(/&(?:amp|lt|gt|quot|apos|#x27|#39);/g, (m) => ENTITIES[m] ?? m);
}

function cleanTitle(title: string | undefined): string | undefined {
  if (!title) return title;
  return title
    .replace(
      /\s*[([](?:\d{4}\s+)?(Remaster(ed)?|Deluxe|Expanded|Anniversary|Special|Super Deluxe|Bonus Track|Legacy)[^)\]]*[)\]]\s*$/i,
      ""
    )
    .trim();
}

// ── util ────────────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function mapWithConcurrency<T>(
  items: readonly T[],
  fn: (item: T) => Promise<void>,
  limit: number
): Promise<void> {
  let next = 0;
  async function worker() {
    while (next < items.length) await fn(items[next++]);
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
}

main();
