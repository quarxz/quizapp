import { useState } from "react";

import styles from "./App.module.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameScreen } from "./components/GameScreen";
import { ResultScreen } from "./components/ResultScreen";
import { AdvertisingScreen } from "./components/AdvertisingScreen";

import bell from "./assets/sounds/bell.wav";
import nope from "./assets/sounds/nope.wav";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [amountCorrectAnswers, setAmountCorrectAnswers] = useState(0);

  const [mute, toggleMute] = useState(false);
  const bellSound = new Audio(bell);
  const nopeSound = new Audio(nope);

  return (
    <div className={styles.board}>
      <div className={styles["headline-background"]}>
        <h1>- Quiz App -</h1>
      </div>
      {screen === "welcome" ? (
        <WelcomeScreen
          onStartQuiz={() => {
            setScreen("advertisement");
          }}
        />
      ) : undefined}

      {screen === "advertisement" ? (
        <AdvertisingScreen
          onSkipAdvertisement={() => {
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
          onCorrectAnswer={() => {
            setAmountCorrectAnswers(
              (prevAmountCorrectAnswers) => prevAmountCorrectAnswers + 1
            );
          }}
          onPlaySound={(option) => {
            if (option) {
              !mute && bellSound.play();
            }
            if (!option) {
              !mute && nopeSound.play();
            }
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
