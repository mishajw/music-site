import { getAlbums } from "@/lib/spotify";
import { AlbumGrid } from "@/components/AlbumGrid";

export default function Home() {
  const albums = getAlbums();
  return (
    <main className="page">
      <AlbumGrid albums={albums} />
    </main>
  );
}
