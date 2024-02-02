import styles from "./GameScreen.module.css";
import { ProgressBar } from "./ProgressBar";
import { Questions } from "./Questions";

export function GameScreen({ onEndQuiz }) {
  return (
    <>
      <ProgressBar />
      <div className={styles["game-field"]}>
        <ul>
          <Questions />
        </ul>
      </div>

      <div className={styles["button-bar"]}>
        <button>WEITER</button>
        <button onClick={onEndQuiz}>CANCEL</button>
      </div>
    </>
  );
}
