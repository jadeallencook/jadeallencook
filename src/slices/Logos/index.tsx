import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import style from "./style.module.css";

export type LogosProps = SliceComponentProps<Content.LogosSlice>;

const Logos: FC<LogosProps> = ({
  slice: {
    primary: { logos, title, description },
    slice_type,
    variation,
  },
}) => {
  return (
    <section
      data-slice-type={slice_type}
      data-slice-variation={variation}
      className={style.root}
    >
      <PrismicRichText field={title} />
      <PrismicRichText field={description} />
      <ul>
        {logos?.map(({ logo, name }, index) => (
          <li key={index}>
            <div className={style.logoContainer}>
              <PrismicImage field={logo} alt="" />
            </div>
            <span className={style.logoName}>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Logos;
