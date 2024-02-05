import styles from "./ResultScreen.module.css";

export function ResultScreen({
  onRestartQuiz,
  onGoToHome,
  amountCorrectAnswers,
}) {
  return (
    <>
      <div className={styles["result-page"]}>
        <p>
          Du hast {amountCorrectAnswers} von 5 Fragen richtig beantwortet !
        </p>
      </div>
      <div className={styles["button-bar"]}>
        <button onClick={onGoToHome}>HOME</button>
        <button onClick={onRestartQuiz}>NEUES QUIZ</button>
      </div>
    </>
  );
}
