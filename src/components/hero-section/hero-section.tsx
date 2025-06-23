import Link from "next/link";

import { Wrapper } from "../wrapper/wrapper";
import styles from "./hero-section.module.css";

const HERO = {
  title: "Веб-разработчик",
  exp: "Опыт 3 года",
  items: [
    "Лендинги",
    "Промо-сайты",
    "Сайты-визитки",
    "Портфолио",
    "Информационные сайты",
  ],
  button: {
    text: "Узнать больше",
    link: "#contacts-id",
  },
};

export const HeroSection = () => {
  return (
    <section className={styles.section}>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.title}>
              {HERO.title}
              <span className={styles.divider}> | </span>
              <span className={styles.exp}>{HERO.exp}</span>
            </h2>
            <span className={styles.expMobile}>{HERO.exp}</span>
            <ul className={styles.list}>
              {HERO.items.map((text, i) => (
                <li key={i} className={styles.item}>
                  {text}
                </li>
              ))}
            </ul>
            <Link className={styles.button} href={HERO.button.link}>
              {HERO.button.text}
            </Link>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
