import { Wrapper } from "../wrapper/wrapper";
import styles from "./stack-section.module.css";

const STACK = {
  title: "Мой технологический набор",
  text: "Создаю качественные проекты с использованием передовых современных решений",
  items: [
    "Next.js",
    "React",
    "TypeScrypt",
    "HTML",
    "CSS",
    "Antd",
    "Material",
    "Rest API",
    "JavaScrypt",
    "PerplexityAI",
    "SQL",
    "PostgreSQL",
    "Design",
    "Prisma ORM",
  ],
};

export const StackSection = () => {
  return (
    <section id="stack-id" className={styles.section}>
      <Wrapper>
        <div className={styles.container}>
          <h2 className={styles.title}>{STACK.title}</h2>
          <h3 className={styles.text}>{STACK.text}</h3>
          <ul className={styles.list}>
            {STACK.items.map((text, i) => (
              <li key={i} className={styles.item}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};
