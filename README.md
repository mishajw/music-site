# Records

A small, curated record collection. Static Next.js site; deploys to Vercel.

## Adding an album

1. On Spotify: album → Share → Copy album link
2. Add a line to [`albums.ts`](./albums.ts):
   ```ts
   { spotify: "https://open.spotify.com/album/…", rating: 5 },
   ```
   Ratings: `1`–`5`, `"work"`, `"nostalgia"`, or `"discovering"`.
3. Run `npm run prebuild` to fetch the new album's metadata into
   `data/album-cache.json`, then commit both files and push.

Cover art, title, and artist are scraped from the Spotify page's Open Graph
tags — no API key. Not on Spotify? Use the manual form:

```ts
{ rating: 5, title: "…", artist: "…", cover: "https://…/cover.jpg", link: "https://…" },
```

## Dev

```sh
npm install
npm run dev
```

## How metadata works

- `npm run prebuild` reads `albums.ts`, fetches any albums not already in
  `data/album-cache.json`, and writes the cache. Adding one album = one fetch.
- `next build` reads the cache synchronously — no network during the build.
- Vercel runs `prebuild` automatically (via the npm `prebuild` lifecycle hook),
  so a push that adds albums without a local prebuild still works — it just
  fetches the missing ones at build time.
- `npm run prebuild -- --refresh` re-fetches everything (e.g. if cover art URLs
  go stale).

## Deploy

Push to GitHub, import the repo on [vercel.com/new](https://vercel.com/new).
