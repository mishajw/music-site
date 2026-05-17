import { getAlbums } from "@/lib/spotify";
import { AlbumGrid } from "@/components/AlbumGrid";

export default async function Home() {
  const albums = await getAlbums();
  return (
    <main className="page">
      <AlbumGrid albums={albums} />
    </main>
  );
}
