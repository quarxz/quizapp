import { useState } from "react";

import styles from "./App.module.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { ProgressBar } from "./components/ProgressBar";
import { GameScreen } from "./components/GameScreen";
import { ResultScreen } from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("welcome");

  return (
    <div className={styles.board}>
      <div className={styles["headline-background"]}>
        <h1>- Quiz App -</h1>
      </div>
      {screen === "welcome" ? <WelcomeScreen /> : "<></>"}
      {screen === "gamescreen" ? <GameScreen /> : "<></>"}
      {screen === "resultscreen" ? <ResultScreen /> : "<></>"}
    </div>
  );
}

export default App;
