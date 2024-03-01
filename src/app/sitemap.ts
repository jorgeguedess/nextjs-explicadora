import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://explicadoratiadenise.com.br/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://explicadoratiadenise.com.br/contato",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://explicadoratiadenise.com.br/galeria",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://explicadoratiadenise.com.br/sobre",
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
