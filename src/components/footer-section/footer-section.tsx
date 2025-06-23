import { Wrapper } from "../wrapper/wrapper";
import styles from "./footer-section.module.css";

const FOOTER = {
  text: `Копанчук Евгений. ${new Date().getFullYear()} г.`,
};

export const FooterSection = () => {
  return (
    <div className={styles.section}>
      <Wrapper>
        <div className={styles.container}>
          <p className={styles.text}>{FOOTER.text}</p>
        </div>
      </Wrapper>
    </div>
  );
};
