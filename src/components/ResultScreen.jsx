import styles from "./ResultScreen.module.css";

export function ResultScreen({
  onRestartQuiz,
  onGoToHome,
  amountCorrectAnswers,
  questions,
}) {
  return (
    <>
      <div className={styles["result-page"]}>
        <div className={styles["result-page--content"]}>
          <p>
            Du hast <b>{amountCorrectAnswers}</b> von <b>5</b> Fragen
            richtig beantwortet !
          </p>
          <span>Richtige Antworten:</span>
          <ul>
            {questions.map((question, index) => {
              if (question.givenAnswer === question.correctIndex) {
                return (
                  <li key={index}>
                    <i>
                      {question.id + ") "}
                      {question.question + ": "}
                    </i>
                    <strong>
                      {question.answers[question.correctIndex]}
                    </strong>
                  </li>
                );
              }
            })}
          </ul>
          <span>Falsche Antworten:</span>
          <ul>
            {questions.map((question, index) => {
              if (question.givenAnswer === null) {
                return (
                  <li key={index + 1}>
                    <i>
                      {question.id + ") "}
                      {question.question}
                    </i>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      <div className={styles["button-bar"]}>
        <button onClick={onGoToHome}>HOME</button>
        <button onClick={onRestartQuiz}>NEUES QUIZ</button>
      </div>
    </>
  );
}
