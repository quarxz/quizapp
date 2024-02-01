import { useState } from "react";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.board}>
      <h1>Quizz App</h1>
      <div className={styles["result-page"]}>
        <h2>Welcome!</h2>
        <p>mehr Tam Tam ...</p>
      </div>
      <div className={styles["progress-bar"]}>
        <span className={styles.progress}></span>
        <p>6/8</p>
      </div>
      <div className={styles["game-field"]}>
        <h2>Question</h2>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Limo</li>
        </ul>
      </div>
      <div className={styles["result-page"]}>
        <p>Du hast 1 von 8 Fragen richtig beantwortet !</p>
      </div>
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
