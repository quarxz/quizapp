import styles from "./ProgressBar.module.css";

export function ProgressBar({ round, amountQuestion }) {
  return (
    <div className={styles["progress-bar"]}>
      <div className={styles["progress-bar-container"]}>
        <span
          style={{
            width:
              round === 0
                ? 100 / amountQuestion + "%"
                : round >= 1
                ? ((round + 1) * 100) / amountQuestion + "%"
                : "",
          }}
          className={styles.progress}
        ></span>
      </div>

      <p>{round + 1 + "/5"}</p>
    </div>
  );
}
