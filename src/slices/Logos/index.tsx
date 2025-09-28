import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";
import style from "./style.module.css";
import Section from "@/components/Section";

export type LogosProps = SliceComponentProps<Content.LogosSlice>;

const Logos: FC<LogosProps> = ({
  slice: {
    primary: { logos, title, description },
  },
}) => {
  return (
    <Section className={style.root} title={title} description={description}>
      <ul>
        {logos?.map(({ logo, name }, index) => (
          <li key={index}>
            <div className={style.logoContainer} aria-hidden={true}>
              <PrismicImage field={logo} alt="" aria-hidden={true} />
            </div>
            <span className={style.logoName}>{name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Logos;
