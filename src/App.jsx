import { useState } from "react";

import styles from "./App.module.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameScreen } from "./components/GameScreen";
import { ResultScreen } from "./components/ResultScreen";
import { AdvertisingScreen } from "./components/AdvertisingScreen";

import { questions } from "./assets/data/questions.js";

import bell from "./assets/sounds/bell.wav";
import nope from "./assets/sounds/nope.wav";
import fanfare from "./assets/sounds/fanfare.wav";

import theClickSound from "./assets/sounds/click.wav";

import soundIconOff from "./assets/images/volume-off-solid.svg";
import soundIconLow from "./assets/images/volume-low-solid.svg";
import { Background } from "./components/Background.jsx";

function App() {
  const [data, setData] = useState(questions);

  const [screen, setScreen] = useState("welcome");
  const [amountCorrectAnswers, setAmountCorrectAnswers] = useState(0);

  const [mute, setMute] = useState(false);
  const bellSound = new Audio(bell);
  const nopeSound = new Audio(nope);
  const fanfareSound = new Audio(fanfare);

  const clickSound = new Audio(theClickSound);

  function setDataCorretAnswer(answer, id) {
    setData(
      data.map((question, index) => {
        if (id === index) {
          return {
            ...question,
            givenAnswer: answer,
          };
        } else {
          return question;
        }
      })
    );
  }

  return (
    <>
      <div className={styles.board}>
        <div className={styles["headline-background"]}>
          <h1>- Quiz App -</h1>
          <span
            className={styles["btn-mute"]}
            onClick={() => {
              setMute((prevMute) => !prevMute);
            }}
          >
            <img src={!mute ? soundIconLow : soundIconOff} alt="Mute" />
          </span>
        </div>
        {screen === "welcome" ? (
          <WelcomeScreen
            onStartQuiz={() => {
              setScreen("advertisement");
              !mute && clickSound.play();
            }}
          />
        ) : undefined}

        {screen === "advertisement" ? (
          <AdvertisingScreen
            onSkipAdvertisement={() => {
              setScreen("game");
              !mute && clickSound.play();
            }}
          />
        ) : undefined}

        {screen === "game" ? (
          <GameScreen
            onShowResultScreen={() => {
              !mute && fanfareSound.play();
              setScreen("result");
            }}
            onEndQuiz={() => {
              !mute && clickSound.play();
              setScreen("welcome");
            }}
            onCorrectAnswer={(answer, round) => {
              setDataCorretAnswer(answer, round);
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
            questions={data}
            clickSound={clickSound}
            mute={mute}
          />
        ) : undefined}
        {screen === "result" ? (
          <ResultScreen
            onGoToHome={() => {
              setScreen("welcome");
              setAmountCorrectAnswers(0);
              setData(questions);
              !mute && clickSound.play();
            }}
            onRestartQuiz={() => {
              setScreen("game");
              setAmountCorrectAnswers(0);
              setData(questions);
              !mute && clickSound.play();
            }}
            amountCorrectAnswers={amountCorrectAnswers}
            questions={data}
          />
        ) : undefined}
      </div>
      <Background className={styles.stars} />
    </>
  );
}

export default App;
