import { useState } from "react";
import styles from "./GameScreen.module.css";
import { ProgressBar } from "./ProgressBar";
// import { questions } from "../assets/data/questions.js";

export function GameScreen({
  onEndQuiz,
  onShowResultScreen,
  onCorrectAnswer,
  onPlaySound,
  questions,
}) {
  const [round, setRound] = useState(0);
  const [activeId, setActiveId] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  function handleNextRound() {
    if (round < 4) {
      setRound((prevRound) => prevRound + 1);
    }
    setActiveId((prevActiveId) => (prevActiveId = null));
    setButtonDisabled(true);
  }

  return (
    <>
      <div className={styles["game-fiel-container"]}>
        <ProgressBar round={round} amountQuestion={questions.length} />
        <div className={styles["game-field"]}>
          <h2>{questions[round].question}</h2>
          <ul>
            {questions[round].answers.map((answer, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (activeId === null) {
                      setActiveId(
                        (prevActiveId) => (prevActiveId = index)
                      );
                      if (questions[round].correctIndex === index) {
                        onCorrectAnswer(index, round);
                        onPlaySound(true);
                      } else {
                        onPlaySound(false);
                      }
                      setButtonDisabled(false);
                    }
                  }}
                  className={`
                  ${styles["answer"]} 
                  ${
                    questions[round].correctIndex === index &&
                    activeId !== null
                      ? styles["answer--true"]
                      : ""
                  }
                  ${
                    questions[round].correctIndex !== index &&
                    activeId !== null &&
                    activeId === index
                      ? styles["answer--false"]
                      : ""
                  }
                  `}
                >
                  {answer}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className={styles["button-bar"]}>
        <button
          className={isButtonDisabled ? styles.advertsBtnDisabled : ""}
          onClick={round < 4 ? handleNextRound : onShowResultScreen}
          disabled={isButtonDisabled}
        >
          {round < 4 ? "WEITER" : "ZUM ERGEBNIS"}
        </button>
        <button onClick={onEndQuiz}>CANCEL</button>
      </div>
    </>
  );
}
