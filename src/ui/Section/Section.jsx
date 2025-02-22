import styles from "./Section.module.css";

function Section({ children }) {
  return (
    <section className={`${styles.containerSection} `}>{children}</section>
  );
}

export default Section;
