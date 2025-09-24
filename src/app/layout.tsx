import "./globals.css";

import { Analytics } from "@vercel/analytics/next";

import { createClient } from "@/prismicio";
import { Metadata } from "next";
import type { AllDocumentTypes } from "../../prismicio-types";

type RouteDocumentType = Exclude<
  AllDocumentTypes["type"],
  "settings" | "navigation"
>;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const routes = new Map<string, RouteDocumentType>([["/", "home"]]);

  const resolvedParams = await params;
  const currentPath = resolvedParams.slug
    ? `/${resolvedParams.slug.join("/")}`
    : "/";
  const documentType = routes.get(currentPath) || "home";

  const client = createClient();

  const {
    data: { default_meta_description, default_meta_title, name },
  } = await client.getSingle("settings");

  const {
    data: { meta_description, meta_title },
  } = await client.getSingle(documentType);

  const title = `${name} | ${meta_title || default_meta_title}`;
  const description = meta_description || default_meta_description;

  return { title, description };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
