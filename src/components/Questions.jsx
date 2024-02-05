import styles from "./Questions.module.css";
import { questions } from "../assets/data/questions";
import { useState } from "react";

export function Questions({ round, onGetAmountCorrectAnswers }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      <h2>{questions[round].question}</h2>
      <ul>
        {questions.map((question, index) => {
          if (index === round) {
            return question.answers.map((answer, index) => {
              return (
                <li
                  key={index}
                  id={index}
                  onClick={() => {
                    if (activeId === null) {
                      setActiveId(
                        (prevActiveId) => (prevActiveId = index)
                      );
                      if (question.correctIndex === index) {
                        onGetAmountCorrectAnswers();
                      }
                    }
                  }}
                  className={`
                  ${styles["answer-listElement"]} 
                  ${
                    question.correctIndex === index && activeId !== null
                      ? styles["answer-true"]
                      : ""
                  }
                  ${
                    question.correctIndex !== index &&
                    activeId !== null &&
                    activeId === index
                      ? styles["answer-false"]
                      : ""
                  }
                  `}
                >
                  {answer}
                </li>
              );
            });
          }
        })}
      </ul>
    </>
  );
}
