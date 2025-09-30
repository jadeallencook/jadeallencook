import { FC } from "react";
import styles from "./style.module.css";
import { ImageField, LinkField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import classNames from "classnames";

interface ImageWithLinkProps {
  link?: LinkField;
  image: ImageField;
  className?: string;
  isPriorityImage?: boolean;
}

const ImageWithLink: FC<ImageWithLinkProps> = ({
  image,
  link,
  className,
  isPriorityImage,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <PrismicNextImage
        className={classNames(styles.image, !link && styles.bottomBorderRadius)}
        field={image}
        aria-hidden={!!image.alt}
        fallbackAlt=""
        priority={isPriorityImage}
      />
      {link?.text && (
        <div className={styles.linkContainer}>
          <PrismicNextLink field={link} tabIndex={0} />
        </div>
      )}
    </div>
  );
};

export default ImageWithLink;
