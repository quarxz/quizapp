import styles from "./WelcomeScreen.module.css";

export function WelcomeScreen({ onStartQuiz }) {
  return (
    <>
      <div className={styles["welcome-screen"]}>
        <h2>Welcome!</h2>
        <p>Teste Dein CSS Wissen!</p>
        <p>Du hast pro Frage nur eine Chance ...</p>
      </div>
      <div className={styles["button-bar"]}>
        <button onClick={onStartQuiz}>START</button>
      </div>
    </>
  );
}
