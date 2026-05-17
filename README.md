# Records

A small, curated record collection. Static Next.js site; deploys to Vercel.

## Adding an album

1. On Spotify: album → Share → Copy album link
2. Add a line to [`albums.ts`](./albums.ts):
   ```ts
   { spotify: "https://open.spotify.com/album/…", artist: "Artist", rating: 5, work: true },
   ```
3. Commit + push. Done.

Cover art and album titles are pulled from Spotify's public oEmbed endpoint at
build time — no API key, no env vars. Use the optional `title` field to
override an ugly Spotify title (e.g. strip "(Remastered 2011)").

## Dev

```sh
npm install
npm run dev
```

## Deploy

Push to GitHub, import the repo on [vercel.com/new](https://vercel.com/new).
Everything else is automatic.
