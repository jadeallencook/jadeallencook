import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./style.module.css";
import { PrismicNextImage } from "@prismicio/next";
import ImageWithLink from "@/components/ImageWithLink";

export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

const TextBlock: FC<TextBlockProps> = ({
  slice: {
    slice_type,
    variation,
    primary: { title, description, image, image_link },
  },
}) =>
  image ? (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className={styles.root}
    >
      <div className={styles.textContainer}>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
      </div>
      <div className={styles.imageContainer}>
        <ImageWithLink image={image} link={image_link} />
      </div>
    </section>
  ) : (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className={styles.root}
    >
      <PrismicRichText field={title} />
      <PrismicRichText field={description} />
    </section>
  );

export default TextBlock;
