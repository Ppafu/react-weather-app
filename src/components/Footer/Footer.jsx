import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/ppafu"
        target="_blank"
        className={styles.icon}>
        <GithubLogo weight="fill" />
      </a>

      <a
        href="https://www.linkedin.com/in/inessaevs"
        target="_blank"
        className={styles.icon}>
        <LinkedinLogo weight="fill" />
      </a>
    </footer>
  );
}

export default Footer;
