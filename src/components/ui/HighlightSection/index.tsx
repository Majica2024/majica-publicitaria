import styles from "./HighlightSection.module.css";

interface HighlightSectionProps {
  span: string;
}
export const HighlightSection = ({ span }: HighlightSectionProps) => {
  return <h3 className={styles.Highlight}>{span}</h3>;
};
