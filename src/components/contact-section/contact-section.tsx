"use client";

import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { sendNotification } from "@/utils/send-notification";
import { zodResolver } from "@hookform/resolvers/zod";

import GMailIcon from "@/../public/icons/gmail.svg";
import TelegramIcon from "@/../public/icons/telegram.svg";
import ViberIcon from "@/../public/icons/viber.svg";
import { Wrapper } from "../wrapper/wrapper";
import styles from "./contact-section.module.css";

const schema = z.object({
  email: z
    .string()
    .email("Введите корректный email")
    .nonempty("Электронная почта обязательна"),
  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(400, "Сообщение должно содержать не более 400 символов"),
});

type Inputs = z.infer<typeof schema>;

const CONTACT = {
  title: "Связаться со мной",
  text: "С радостью отвечу в ближайшее время",
  media: [
    { icon: TelegramIcon, text: process.env.NEXT_PUBLIC_TELEGRAM },
    { icon: ViberIcon, text: process.env.NEXT_PUBLIC_VIBER },
    { icon: GMailIcon, text: process.env.NEXT_PUBLIC_EMAIL },
  ],
  form: {
    emailPlaceholder: "Электронная почта",
    messagePlaceholder: "Сколько будет стоить сайт?",
  },
};

export const ContactSection = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsDisabled(true);
    const response = await fetch("/api/email", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      setIsDisabled(false);
      sendNotification("❌ Ошибка отправки сообщения");
      return;
    }
    reset();
    sendNotification("✔️ Сообщение доставлено");
  };

  return (
    <section id="contacts-id" className={styles.section}>
      <Wrapper>
        <div className={styles.container}>
          <div className={styles.head}>
            <h2 className={styles.title}>{CONTACT.title}</h2>
            <h3 className={styles.text}>{CONTACT.text}</h3>
          </div>
          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <input
                className={styles.email}
                type="email"
                placeholder={CONTACT.form.emailPlaceholder}
                autoComplete={"off"}
                {...register("email")}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
              <textarea
                className={styles.message}
                placeholder={CONTACT.form.messagePlaceholder}
                {...register("message")}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
              <div className={styles.row}>
                {isDisabled ? (
                  <p className={styles.successText}>
                    Пожалуйста, ожидайте, в скором времени я свяжусь с вами
                  </p>
                ) : (
                  <button
                    className={styles.button}
                    type="submit"
                    disabled={isDisabled}
                  >
                    Отправить
                  </button>
                )}
              </div>
            </form>
            <ul className={styles.list}>
              {CONTACT.media.map((item, i) => (
                <li key={i} className={styles.item}>
                  <Image
                    width={48}
                    height={48}
                    className={styles.itemIcon}
                    src={item.icon}
                    alt={`${item.text}-icon`}
                  />
                  <p className={styles.itemText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
