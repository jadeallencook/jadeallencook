import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";
import { PrismicNextImage } from "@prismicio/next";
import Button from "@/components/Button";
import ImageWithLink from "@/components/ImageWithLink";

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
      <div className={styles.textContainer}>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
        <div>
          {links?.map(({ variant, ...link }, index) => (
            <Button key={index} link={link} variant={variant} />
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <ImageWithLink image={image} link={image_link} />
      </div>
    </section>
  );
};

export default Hero;
