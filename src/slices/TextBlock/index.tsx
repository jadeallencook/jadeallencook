import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";
import ImageWithLink from "@/components/ImageWithLink";
import Section from "@/components/Section";

export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

const TextBlock: FC<TextBlockProps> = ({
  slice: {
    primary: { title, description, image, image_link },
  },
}) => (
  <Section className={styles.root} title={title} description={description}>
    {image && (
      <div className={styles.imageContainer}>
        <ImageWithLink
          image={image}
          link={image_link}
          className={styles.image}
        />
      </div>
    )}
  </Section>
);

export default TextBlock;
