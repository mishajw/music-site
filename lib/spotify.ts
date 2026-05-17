import { albums, type AlbumEntry, type Rating } from "@/albums";

export interface Album {
  rating: Rating;
  title: string;
  artist: string;
  thumbnail: string;
  /** Click target — spotify:album:<id> for Spotify entries, external URL otherwise. */
  href: string;
  /** Fallback opened in a new tab if the native app doesn't grab focus. */
  fallbackHref: string;
}

const RATING_ORDER: Rating[] = [5, 4, 3, 2, 1, "work", "nostalgia", "discovering"];
const REVALIDATE = 60 * 60 * 24 * 7; // 1 week

interface AlbumMeta {
  title?: string;
  artist?: string;
  image?: string;
}

/**
 * Scrape title / artist / cover from the Spotify album page's OG tags.
 * No API key needed; one fetch per album at build time.
 *   og:title       → "OK Computer - Album by Radiohead | Spotify"
 *   og:description → "Radiohead · album · 1997 · 12 songs"
 *   og:image       → 640×640 cover art
 */
async function fetchAlbumMeta(spotifyUrl: string): Promise<AlbumMeta> {
  try {
    let res: Response | undefined;
    for (let attempt = 0; attempt < 4; attempt++) {
      res = await fetch(spotifyUrl, {
        headers: { "User-Agent": "Mozilla/5.0" },
        next: { revalidate: REVALIDATE },
      });
      if (res.status !== 429) break;
      const wait = Number(res.headers.get("retry-after")) || 2 ** attempt * 5;
      await sleep(Math.min(wait, 60) * 1000);
    }
    if (!res?.ok) return {};
    const html = await res.text();
    const og = (prop: string) => {
      const raw = html.match(new RegExp(`<meta property="og:${prop}" content="([^"]*)"`))?.[1];
      return raw ? decodeEntities(raw) : undefined;
    };

    const rawTitle = og("title"); // "OK Computer - Album by Radiohead | Spotify"
    const description = og("description"); // "Radiohead · album · 1997 · 12 songs"

    return {
      title: cleanTitle(rawTitle?.split(/ - (?:Album|Single|EP|Compilation) by /)[0]),
      artist: description?.split("·")[0]?.trim(),
      image: og("image"),
    };
  } catch {
    return {};
  }
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

/** Strip noisy parenthetical / bracketed suffixes Spotify tacks on. */
function cleanTitle(title: string | undefined): string | undefined {
  if (!title) return title;
  return title
    .replace(
      /\s*[([](?:\d{4}\s+)?(Remaster(ed)?|Deluxe|Expanded|Anniversary|Special|Super Deluxe|Bonus Track|Legacy)[^)\]]*[)\]]\s*$/i,
      ""
    )
    .trim();
}

function toAppUri(spotifyUrl: string): string {
  const m = spotifyUrl.match(/open\.spotify\.com\/(album|track|playlist|artist)\/([A-Za-z0-9]+)/);
  return m ? `spotify:${m[1]}:${m[2]}` : spotifyUrl;
}

async function resolve(entry: AlbumEntry): Promise<Album> {
  if ("spotify" in entry) {
    const meta = await fetchAlbumMeta(entry.spotify);
    return {
      rating: entry.rating,
      title: meta.title ?? "Unknown album",
      artist: meta.artist ?? "Unknown artist",
      thumbnail: meta.image ?? "",
      href: toAppUri(entry.spotify),
      fallbackHref: entry.spotify,
    };
  }
  return {
    rating: entry.rating,
    title: entry.title,
    artist: entry.artist,
    thumbnail: entry.cover,
    href: entry.link ?? "#",
    fallbackHref: entry.link ?? "#",
  };
}

export async function getAlbums(): Promise<Album[]> {
  return mapWithConcurrency(albums, resolve, 8);
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

/** Run `fn` over `items` with at most `limit` in flight at once. */
async function mapWithConcurrency<T, R>(
  items: readonly T[],
  fn: (item: T) => Promise<R>,
  limit: number
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

export function groupByRating(list: Album[]): Map<Rating, Album[]> {
  const groups = new Map<Rating, Album[]>();
  for (const rating of RATING_ORDER) {
    const members = list
      .filter((a) => a.rating === rating)
      .sort((a, b) => sortName(a.artist).localeCompare(sortName(b.artist)));
    if (members.length > 0) groups.set(rating, members);
  }
  return groups;
}

/** Drop leading "The " so e.g. The Streets sorts under S. */
function sortName(artist: string): string {
  return artist.replace(/^the\s+/i, "");
}
