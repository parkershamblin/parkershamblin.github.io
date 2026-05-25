import type { Metadata } from "next";

import { profileImage } from "@/resources";

type ProfileImageMetadataOptions = {
  title: string;
  description: string;
  baseURL: string;
  path: string;
  author?: {
    name: string;
    url?: string;
  };
};

export function absoluteUrl(baseURL: string, path: string) {
  const normalizedBaseURL = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBaseURL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function imageUrl(baseURL: string) {
  return `${baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL}${profileImage.src}`;
}

export function generateProfileImageMetadata({
  title,
  description,
  baseURL,
  path,
  author,
}: ProfileImageMetadataOptions): Metadata {
  const url = absoluteUrl(baseURL, path);
  const portraitUrl = imageUrl(baseURL);

  return {
    metadataBase: new URL(baseURL),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      images: [
        {
          url: portraitUrl,
          alt: profileImage.alt,
          width: profileImage.width,
          height: profileImage.height,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: portraitUrl,
          alt: profileImage.alt,
          width: profileImage.width,
          height: profileImage.height,
        },
      ],
    },
    ...(author ? { authors: [author] } : {}),
  };
}
