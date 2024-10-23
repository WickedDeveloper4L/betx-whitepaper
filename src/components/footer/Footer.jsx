import { FaDiscord, FaTelegram } from "react-icons/fa";
import styles from "./footer.module.scss";
import { BiMailSend, BiWorld } from "react-icons/bi";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        href="https://discord.gg/dV4Y9Unc"
        target="_blank"
        className={styles.item}
      >
        <FaDiscord className={styles.discord} />
        <span className={styles.text}>Join our Discord Community</span>
      </a>
      <a
        href="https://t.me/+K6DzaUlZaRxkMDM0"
        target="_blank"
        className={styles.item}
      >
        <FaTelegram className={styles.telegram} />
        <span className={styles.text}>Join our Telegram Community</span>
      </a>
      <a className={styles.item} href="mailto:info@betxtoken.com">
        <BiMailSend className={styles.mail} />
        <span className={styles.text}>Send us a mail</span>
      </a>
      <a className={styles.item} href="https://betxtoken.com" target="_blank">
        <BiWorld className={styles.website} />
        <span className={styles.text}>Visit our website</span>
      </a>
    </div>
  );
};

export default Footer;
