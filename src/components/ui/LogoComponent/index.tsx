import Image from "next/image";
import Logo from "../../../../public/assets/images/logo.svg";
import styles from "./Logo.module.css";

export const LogoComponent = ({ size = "" }) => {
  return (
    <picture className={styles.picture} style={{ height: size }}>
      <Image src={Logo} alt='Logo' priority />
    </picture>
  );
};
