import type { Album } from "@/lib/spotify";
import { groupByRating } from "@/lib/spotify";
import type { Rating } from "@/albums";
import { AlbumCard } from "./AlbumCard";

const NUMBER_WORD: Record<number, string> = {
  5: "five",
  4: "four",
  3: "three",
  2: "two",
  1: "one",
};

function heading(rating: Rating) {
  if (typeof rating === "string") return <>{rating}</>;
  return (
    <>
      {NUMBER_WORD[rating]}
      <br />
      <span className="ratingDenom">/ five</span>
    </>
  );
}

export function AlbumGrid({ albums }: { albums: Album[] }) {
  const groups = groupByRating(albums);

  return (
    <>
      {[...groups.entries()].map(([rating, members]) => (
        <section key={rating} className="ratingSection">
          <h2 className="ratingHeading">{heading(rating)}</h2>
          <div className="grid">
            {members.map((album) => (
              <AlbumCard key={album.title + album.artist} album={album} />
            ))}
          </div>
        </section>
      ))}
      {albums.length === 0 && <p className="empty">nothing here yet</p>}
    </>
  );
}
