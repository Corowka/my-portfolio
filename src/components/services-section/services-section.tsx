import Image from "next/image";

import BusinessCardImage from "@/../public/images/services-section/businessCard.webp";
import InfoSiteImage from "@/../public/images/services-section/infoSite.webp";
import LandingImage from "@/../public/images/services-section/landing.webp";
import PortfolioImage from "@/../public/images/services-section/portfolio.webp";
import PromoImage from "@/../public/images/services-section/promo.webp";
import { Wrapper } from "../wrapper/wrapper";
import styles from "./services-section.module.css";

const SERVICES = {
  title: "Мои услуги",
  text: "Разрабатываю следующие сайты",
  items: [
    {
      image: LandingImage,
      title: "Лендинг",
      goal: "Привлечение клиентов и конверсии",
      features: [
        "Простой и фокусированный дизайн",
        "Рекламы продуктов, услуг или мероприятий",
      ],
    },
    {
      image: PromoImage,
      title: "Промо‑сайт",
      goal: "Продвижение продукта, бренда или кампании",
      features: [
        "Креативный дизайн с анимацией",
        "Видеоконтент и интерактивные элементы",
      ],
    },
    {
      image: PortfolioImage,
      title: "Портфолио",
      goal: "Демонстрация работ, навыков или проектов",
      features: [
        "Минималистичный дизайн",
        "Галерея работ, разделы об авторе и контакты",
      ],
    },
    {
      image: BusinessCardImage,
      title: "Сайт‑визитка",
      goal: "Представление информации о компании или человеке",
      features: ["Структура: О нас, услуги, контакты", "Простота и ясность"],
    },
    {
      image: InfoSiteImage,
      title: "Инфосайт",
      goal: "Предоставление информации по одной теме",
      features: [
        "Логичная структура",
        "Может включать видео, инфографику или блочный контент",
      ],
    },
  ],
};

export const ServicesSection = () => {
  return (
    <section id="services-id" className={styles.section}>
      <Wrapper>
        <div className={styles.container}>
          <h2 className={styles.title}>{SERVICES.title}</h2>
          <h3 className={styles.text}>{SERVICES.text}</h3>
          <ul className={styles.list}>
            {SERVICES.items.map((item, i) => (
              <li key={i} className={styles.item}>
                <div className={styles.card}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <h5 className={styles.cardGoal}>{item.goal}</h5>
                  <ul className={styles.cardFeatures}>
                    {item.features.map((feature, j) => (
                      <li key={j} className={styles.cardFeatureItem}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Image
                  className={styles.image}
                  width={320}
                  height={320}
                  src={item.image}
                  alt={`${item.title}-example-image`}
                />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};
