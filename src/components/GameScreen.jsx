import styles from "./GameScreen.module.css";
import { ProgressBar } from "./ProgressBar";

export function GameScreen({ onEndQuiz }) {
  return (
    <>
      <ProgressBar />
      <div className={styles["game-field"]}>
        <h2>- Questions -</h2>
        <ul>
          <li className={styles["answer-false"]}>#1 Coffee oder Tea ?</li>
          <li className={styles["answer-true"]}>#2 Tea oder Coffee ?</li>
          <li>#3 Milk oder Kakao ?</li>
          <li>#4 Limo oder Cola ?</li>
        </ul>
      </div>

      <div className={styles["button-bar"]}>
        <button onClick={onEndQuiz}>WEITER</button>
        <button>CANCEL</button>
      </div>
    </>
  );
}
