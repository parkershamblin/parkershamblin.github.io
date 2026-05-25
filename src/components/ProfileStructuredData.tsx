import Script from "next/script";

import { absoluteUrl, imageUrl } from "@/utils/seo";
import { about, baseURL, identityLinks, person, profileImage } from "@/resources";

type ProfileStructuredDataProps = {
  description: string;
  path: string;
  title: string;
};

function scriptId(path: string) {
  return `profile-schema-${path === "/" ? "home" : path.replace(/[^a-z0-9]+/gi, "-")}`;
}

export function ProfileStructuredData({ description, path, title }: ProfileStructuredDataProps) {
  const pageUrl = absoluteUrl(baseURL, path);
  const portraitUrl = imageUrl(baseURL);
  const imageId = `${portraitUrl}#image`;
  const personId = `${absoluteUrl(baseURL, "/")}#person`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        headline: title,
        description,
        primaryImageOfPage: {
          "@id": imageId,
        },
        image: {
          "@id": imageId,
        },
        mainEntity: {
          "@id": personId,
        },
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: portraitUrl,
        contentUrl: portraitUrl,
        width: profileImage.width,
        height: profileImage.height,
        caption: profileImage.caption,
        description: profileImage.alt,
        name: profileImage.alt,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: person.name,
        givenName: person.firstName,
        familyName: person.lastName,
        jobTitle: person.role,
        url: absoluteUrl(baseURL, about.path),
        image: {
          "@id": imageId,
        },
        sameAs: identityLinks,
      },
    ],
  };

  return (
    <Script
      id={scriptId(path)}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
