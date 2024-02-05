import { useState } from "react";

import styles from "./App.module.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameScreen } from "./components/GameScreen";
import { ResultScreen } from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [amountCorrectAnswers, setAmountCorrectAnswers] = useState(0);

  return (
    <div className={styles.board}>
      <div className={styles["headline-background"]}>
        <h1>- Quiz App -</h1>
      </div>
      {screen === "welcome" ? (
        <WelcomeScreen
          onStartQuiz={() => {
            setScreen("game");
          }}
        />
      ) : undefined}
      {screen === "game" ? (
        <GameScreen
          onShowResultScreen={() => {
            setScreen("result");
          }}
          onEndQuiz={() => {
            setScreen("welcome");
          }}
          onGetAmountCorrectAnswers={() => {
            setAmountCorrectAnswers(
              (prevAmountCorrectAnswers) => prevAmountCorrectAnswers + 1
            );
          }}
        />
      ) : undefined}
      {screen === "result" ? (
        <ResultScreen
          onGoToHome={() => {
            setScreen("welcome");
            setAmountCorrectAnswers(0);
          }}
          onRestartQuiz={() => {
            setScreen("game");
            setAmountCorrectAnswers(0);
          }}
          amountCorrectAnswers={amountCorrectAnswers}
        />
      ) : undefined}
    </div>
  );
}

export default App;
