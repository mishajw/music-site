"use client";

import type { Album } from "@/lib/spotify";

export function AlbumCard({ album }: { album: Album }) {
  const isSpotify = album.href.startsWith("spotify:");
  return (
    <a
      className="card"
      href={album.fallbackHref}
      target={isSpotify ? undefined : "_blank"}
      rel={isSpotify ? undefined : "noopener noreferrer"}
      onClick={isSpotify ? (e) => openInSpotify(e, album.href, album.fallbackHref) : undefined}
      title={`Open ${album.title}`}
    >
      <div className="coverWrap">
        {album.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="cover"
            src={album.thumbnail}
            alt={`${album.title} — ${album.artist}`}
            width={300}
            height={300}
            loading="lazy"
          />
        ) : (
          <div className="cover coverFallback">♪</div>
        )}
        <div className="meta">
          <span className="title">{album.title}</span>
          <span className="artist">{album.artist}</span>
        </div>
        {isSpotify && (
          <span className="spotifyHint" aria-hidden="true">
            <SpotifyIcon />
          </span>
        )}
      </div>
    </a>
  );
}

/**
 * Try to open the native Spotify app; fall back to the web link if it
 * doesn't grab focus within a beat. Modifier-clicks pass through so
 * cmd/ctrl+click still opens the web URL in a new tab.
 */
function openInSpotify(e: React.MouseEvent, appUri: string, webUrl: string) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();

  let appOpened = false;
  const markOpened = () => {
    appOpened = true;
  };
  window.addEventListener("blur", markOpened);
  document.addEventListener("visibilitychange", markOpened);

  window.location.href = appUri;

  window.setTimeout(() => {
    window.removeEventListener("blur", markOpened);
    document.removeEventListener("visibilitychange", markOpened);
    if (!appOpened && document.visibilityState === "visible") {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  }, 1200);
}

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.5 17.3a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.55-1.16a.75.75 0 1 1-.33-1.46c4.57-1.04 8.5-.59 11.66 1.34.35.22.47.68.25 1.03zm1.47-3.27a.94.94 0 0 1-1.29.3c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 1 1-.54-1.79c4.36-1.32 9.78-.68 13.5 1.6.44.27.58.85.3 1.29zm.13-3.4C15.26 8.33 8.86 8.12 5.15 9.24a1.12 1.12 0 1 1-.65-2.15c4.26-1.29 11.32-1.04 15.78 1.6a1.12 1.12 0 0 1-1.18 1.94z" />
    </svg>
  );
}
