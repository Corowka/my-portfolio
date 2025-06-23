import { ReactNode } from "react";

import styles from "./wrapper.module.css";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <div className={styles.container}>{children}</div>;
};
