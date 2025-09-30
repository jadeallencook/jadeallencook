import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [""];
  const sitemap = routes.map((route) => ({
    url: `https://jadeallencook.com/${route}`,
    lastModified: new Date(),
  }));

  return sitemap;
}
