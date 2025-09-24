import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import styles from "./style.module.css";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({
  slice: {
    primary: { title, description, links, image, image_link },
    slice_type,
    variation,
  },
}) => {
  return (
    <section
      className={styles.root}
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      <div>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
        <div>
          {links?.map(({ variant, ...link }, index) => (
            <PrismicLink
              key={index}
              field={link}
              className={styles[variant as keyof typeof styles]}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
      <div>
        <PrismicImage field={image} />
        <PrismicLink field={image_link} />
      </div>
    </section>
  );
};

export default Hero;
