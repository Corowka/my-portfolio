import Link from "next/link";

import { Wrapper } from "../wrapper/wrapper";
import styles from "./header-section.module.css";

const HEADER = {
  logo: {
    text: "Евгений Копанчук",
    link: "/",
  },
  navbar: [
    { text: "Услуги", link: "#services-id" },
    { text: "Стек", link: "#stack-id" },
  ],
  contact: {
    text: "Связаться",
    link: "#contacts-id",
  },
};

export const HeaderSection = () => {
  return (
    <header className={styles.section}>
      <Wrapper>
        <div className={styles.container}>
          <Link className={styles.logo} href={HEADER.logo.link}>
            {HEADER.logo.text}
          </Link>
          <nav className={styles.navbar}>
            {HEADER.navbar.map((item, i) => (
              <Link key={i} className={styles.navItem} href={item.link}>
                {item.text}
              </Link>
            ))}
            <Link className={styles.contact} href={HEADER.contact.link}>
              {HEADER.contact.text}
            </Link>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};
