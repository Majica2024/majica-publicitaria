import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.links}>
          <Link href='/terminos'>Términos y condiciones</Link>
          <Link href='/privacidad'>Políticas de privacidad</Link>
        </nav>

        <div className={styles.copyright}>2024. Derechos reservados</div>

        <div className={styles.social}>
          <p className={styles.socialText}>Síguenos en</p>
          <div className={styles.socialIcons}>
            <Link
              href='https://instagram.com'
              target='_blank'
              aria-label='Síguenos en Instagram'
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href='https://facebook.com'
              target='_blank'
              aria-label='Síguenos en Facebook'
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href='https://youtube.com'
              target='_blank'
              aria-label='Síguenos en YouTube'
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
