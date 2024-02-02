import styles from "./ResultScreen.module.css";

export function ResultScreen({ onRestartQuiz }) {
  return (
    <>
      <div className={styles["result-page"]}>
        <p>Du hast 1 von 8 Fragen richtig beantwortet !</p>
      </div>
      <div className={styles["button-bar"]}>
        <button onClick={onRestartQuiz}>HOME</button>
      </div>
    </>
  );
}
