import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";
import { PrismicNextImage } from "@prismicio/next";

export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

const TextBlock: FC<TextBlockProps> = ({
  slice: {
    slice_type,
    variation,
    primary: { title, description, image },
  },
}) =>
  image ? (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className={styles.root}
    >
      <div>
        <div>
          <PrismicRichText field={title} />
          <PrismicRichText field={description} />
        </div>
        <div>
          <PrismicNextImage field={image} />
        </div>
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
