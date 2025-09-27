import { FC, useId } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./style.module.css";
import Button from "@/components/Button";

export type ImageLinksProps = SliceComponentProps<Content.ImageLinksSlice>;

const ImageLinks: FC<ImageLinksProps> = ({
  slice: {
    primary: { title, description, links },
    slice_type,
    variation,
  },
}) => {
  const id = useId();
  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className={styles.root}
    >
      <PrismicRichText field={title} />
      <PrismicRichText field={description} />
      <ul>
        {links?.map(({ link, image, year, views }, index) => {
          const listItemId = `${id}-${index}`;
          return (
            <li key={index} aria-describedby={listItemId}>
              <PrismicNextImage field={image} alt="" aria-hidden={true} />
              <Button link={link} id={id} variant="secondary" />
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
    </section>
  );
};

export default ImageLinks;
