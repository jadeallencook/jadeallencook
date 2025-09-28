import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Accordion from "@/components/Accordion";
import Section from "@/components/Section";
import styles from "./style.module.css";

export type AccordionsProps = SliceComponentProps<Content.AccordionsSlice>;

const Accordions: FC<AccordionsProps> = ({
  slice: {
    primary: { title, description, accordions },
  },
}) => {
  return (
    <Section title={title} description={description}>
      <div className={styles.accordionsContainer}>
        {accordions.map(({ summary, details }, index) => (
          <Accordion key={index} summary={summary} details={details} />
        ))}
      </div>
    </Section>
  );
};

export default Accordions;
