import styles from "./Questions.module.css";
import { questions } from "../assets/data/questions";

export function Questions() {
  return (
    <>
      <h2>{questions[2].question}</h2>
      <ul>
        {questions.map((question, index) => {
          if (index === 2) {
            return question.answers.map((answer, idx) => {
              return (
                <li
                  key={idx}
                  className={`${styles["answer-listElement"]}`}
                >
                  <a>{answer} </a>
                </li>
              );
            });
          }
        })}
      </ul>
    </>
  );
}
