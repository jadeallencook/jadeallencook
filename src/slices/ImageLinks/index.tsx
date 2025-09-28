import { FC, useId } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./style.module.css";
import Button from "@/components/Button";
import Section from "@/components/Section";

export type ImageLinksProps = SliceComponentProps<Content.ImageLinksSlice>;

const ImageLinks: FC<ImageLinksProps> = ({
  slice: {
    primary: { title, description, links },
  },
}) => {
  const id = useId();
  return (
    <Section
      className={styles.container}
      title={title}
      description={description}
    >
      <ul className={styles.list}>
        {links?.map(({ link, image, year, views }, index) => {
          const listItemId = `${id}-${index}`;
          return (
            <li key={index} aria-describedby={listItemId}>
              <PrismicNextImage field={image} alt="" aria-hidden={true} />
              <Button link={link} id={listItemId} variant="secondary" />
              <div>
                <span>
                  <span aria-hidden="true">~</span>
                  {views} views
                </span>
                <span>Published in {year}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default ImageLinks;
