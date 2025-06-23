import dynamic from "next/dynamic";

import { HeaderSection } from "@/components/header-section/header-section";
import { HeroSection } from "@/components/hero-section/hero-section";
const ServicesSection = dynamic(() =>
  import("@/components/services-section/services-section").then(
    (mod) => mod.ServicesSection
  )
);
const StackSection = dynamic(() =>
  import("@/components/stack-section/stack-section").then(
    (mod) => mod.StackSection
  )
);
const ContactSection = dynamic(() =>
  import("@/components/contact-section/contact-section").then(
    (mod) => mod.ContactSection
  )
);
const FooterSection = dynamic(() =>
  import("@/components/footer-section/footer-section").then(
    (mod) => mod.FooterSection
  )
);

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeaderSection />
      <HeroSection />
      <ServicesSection />
      <StackSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
