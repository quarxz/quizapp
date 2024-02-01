import styles from "./ProgressBar.module.css";

export function ProgressBar() {
  return (
    <div className={styles["progress-bar"]}>
      <span className={styles.progress}></span>
      <p>6/8</p>
    </div>
  );
}
