import styles from "./HighlightSection.module.css";

export const HighlightSection = ({ span }) => {
  return <h3 className={styles.Highlight}>{span}</h3>;
};
