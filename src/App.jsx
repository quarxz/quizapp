import { useState } from "react";

import styles from "./App.module.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { ProgressBar } from "./components/ProgressBar";
import { GameScreen } from "./components/GameScreen";
import { ResultScreen } from "./components/ResultScreen";

function App() {
  return (
    <div className={styles.board}>
      <div className={styles["headline-background"]}>
        <h1>- Quiz App -</h1>
      </div>
      <WelcomeScreen />
      {/* <ProgressBar /> */}
      {/* <GameScreen /> */}
      {/* <ResultScreen /> */}

      <div className={styles["button-bar"]}>
        <button>START</button>
        {/* <button>WEITER</button>
        <button>CANCEL</button>
        <button>HOME</button> */}
      </div>
    </div>
  );
}

export default App;
