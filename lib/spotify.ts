import { albums, type AlbumEntry, type Rating } from "@/albums";
import cache from "@/data/album-cache.json";

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

interface CachedMeta {
  title: string;
  artist: string;
  thumbnail: string;
}

const metaByUrl = cache as Record<string, CachedMeta>;
const RATING_ORDER: Rating[] = [5, 4, 3, 2, 1, "work", "nostalgia", "discovering"];

function resolve(entry: AlbumEntry): Album {
  if ("spotify" in entry) {
    const meta = metaByUrl[entry.spotify];
    return {
      rating: entry.rating,
      title: meta?.title ?? "Unknown album",
      artist: meta?.artist ?? "Unknown artist",
      thumbnail: meta?.thumbnail ?? "",
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

function toAppUri(spotifyUrl: string): string {
  const m = spotifyUrl.match(/open\.spotify\.com\/(album|track|playlist|artist)\/([A-Za-z0-9]+)/);
  return m ? `spotify:${m[1]}:${m[2]}` : spotifyUrl;
}

export function getAlbums(): Album[] {
  return albums.map(resolve);
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
