import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://khushikrishnamurthy.com", // TODO: replace with real domain
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
