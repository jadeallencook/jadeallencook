import { PrismicLink } from "@prismicio/react";
import styles from "./style.module.css";
import { createClient } from "@/prismicio";
import Button from "@/components/Button";

const Navigation = async () => {
  const client = createClient();
  const {
    data: { links },
  } = await client.getSingle("navigation");

  return (
    <details className={styles.menu}>
      <summary className={styles.navHeader} aria-label="Social media links">
        <div className={styles.name} aria-hidden={true}>
          Jade Allen Cook
        </div>
        <div className={styles.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </summary>
      <nav className={styles.menuItems}>
        {links.map(({ link }, index) => (
          <Button link={link} key={index} variant="secondary" />
        ))}
      </nav>
    </details>
  );
};

export default Navigation;
