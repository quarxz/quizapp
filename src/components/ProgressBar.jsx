import styles from "./ProgressBar.module.css";

export function ProgressBar({ round, amountQuestion }) {
  return (
    <div className={styles["progress-bar"]}>
      <span
        style={{
          width: (round * 100) / amountQuestion + "%",
        }}
        className={styles.progress}
      ></span>
      <p>{round + 1 + "/5"}</p>
    </div>
  );
}
