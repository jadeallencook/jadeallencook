import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";
import Button from "@/components/Button";
import ImageWithLink from "@/components/ImageWithLink";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({
  slice: {
    primary: { title, description, links, image, image_link, video, video_alt },
  },
}) => {
  return (
    <section className={styles.root}>
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
        <ImageWithLink
          video={(video as { url?: string })?.url || ""}
          videoAlt={video_alt || ""}
          image={image}
          link={image_link}
          isPriorityImage={true}
        />
      </div>
    </section>
  );
};

export default Hero;
