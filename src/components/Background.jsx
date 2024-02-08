import { useState } from "react";
import styles from "./Background.module.css";

export function Background() {
  return (
    <>
      <div className={styles["star-container-one"]}>
        <div className={styles["five-pointed-star"]}></div>
      </div>
      <div className={styles["star-container-two"]}>
        <div className={styles["five-pointed-star"]}></div>
      </div>
      <div className={styles["star-container-three"]}>
        <div className={styles["five-pointed-star"]}></div>
      </div>
    </>
  );
}
