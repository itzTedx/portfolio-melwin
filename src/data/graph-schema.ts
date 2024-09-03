import { siteConfig } from "@/utils/siteConfig";
import { Graph } from "schema-dts";

const baseURL = process.env.BASE_URL || "localhost:3000";

export const graph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `https://${baseURL}/#melwin`,
      name: siteConfig.name,
      gender: "male",
      hasOccupation: {
        "@type": "Occupation",
        name: "Graphic Designer",
        qualifications: "B.Sc. Visual Communication",
      },
      mainEntityOfPage: { "@id": `https://${baseURL}/#page` },
      subjectOf: { "@id": `https://${baseURL}/#page` },
    },
    {
      "@type": "AboutPage",
      "@id": `${baseURL}/#site`,
      url: `${baseURL}/about`,
      name: `${siteConfig.name}'s Portfolio`,
      inLanguage: "en-US",
      description: siteConfig.description,
      mainEntity: { "@id": `https://${baseURL}/about/#melwin` },
    },
    {
      "@type": "WebPage",
      "@id": `${baseURL}/projects/#page`,
      url: `${baseURL}/projects`,
      name: `${siteConfig.name}'s Projects`,
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${baseURL}/#site`,
      },
      about: { "@id": `https://${baseURL}/#melwin` },
      mainEntity: { "@id": `https://${baseURL}/#melwin` },
    },
  ],
};
