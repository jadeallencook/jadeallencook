import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./style.module.css";
import Section from "@/components/Section";
import ImageWithLink from "@/components/ImageWithLink";

export type ImageLinksProps = SliceComponentProps<Content.ImageLinksSlice>;

const ImageLinks: FC<ImageLinksProps> = ({
  slice: {
    primary: { title, description, links },
  },
}) => {
  return (
    <Section
      className={styles.container}
      title={title}
      description={description}
    >
      <ul className={styles.list}>
        {links?.map(({ link, image, year, views }, index) => (
          <li key={index}>
            <ImageWithLink image={image} aria-hidden={true} link={link} />
            <div>
              <div>
                <span aria-hidden="true">~</span>
                <span role="text">{views} views</span>
              </div>
              <span role="text">Published in {year}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default ImageLinks;
