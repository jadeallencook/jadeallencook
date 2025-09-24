import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const home = await client.getSingle("home");
  return (
    <main>
      <SliceZone slices={home.data.slices} components={components} />
    </main>
  );
}
