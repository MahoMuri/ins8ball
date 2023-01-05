import { Icon } from "@iconify-icon/react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <p>2023 &copy; MahoMuri</p>
        <Icon icon="ci:dot-02-s" />
        <p>Rizuno</p>
        <Icon icon="ci:dot-02-s" />
        <p>COMPILE</p>
        <Icon icon="ci:dot-02-s" />
        <p>All Rights Reserved.</p>
      </div>
    </>
  );
}
