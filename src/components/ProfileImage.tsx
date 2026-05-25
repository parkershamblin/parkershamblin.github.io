import classNames from "classnames";

import { profileImage } from "@/resources";
import styles from "./ProfileImage.module.scss";

type ProfileImageProps = {
  caption?: boolean;
  priority?: boolean;
  variant?: "hero" | "about";
};

function srcSet(images: Array<{ src: string; width: number }>) {
  return images.map((image) => `${image.src} ${image.width}w`).join(", ");
}

export function ProfileImage({
  caption = true,
  priority = false,
  variant = "hero",
}: ProfileImageProps) {
  const sizes =
    variant === "about"
      ? "(max-width: 640px) 168px, 192px"
      : profileImage.sizes;

  return (
    <figure className={classNames(styles.figure, styles[variant])}>
      <picture className={styles.picture}>
        <source type="image/webp" srcSet={srcSet(profileImage.sources.webp)} sizes={sizes} />
        <source type="image/jpeg" srcSet={srcSet(profileImage.sources.jpeg)} sizes={sizes} />
        <img
          className={styles.image}
          src={profileImage.src}
          alt={profileImage.alt}
          width={profileImage.width}
          height={profileImage.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
        />
      </picture>
      {caption && <figcaption className={styles.caption}>{profileImage.caption}</figcaption>}
    </figure>
  );
}
