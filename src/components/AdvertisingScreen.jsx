import { useState } from "react";
import styles from "./AdvertisingScreen.module.css";

export function AdvertisingScreen({ onSkipAdvertisement }) {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  setTimeout(() => {
    console.log("Console log");
    setButtonDisabled(false);
  }, 5000);

  return (
    <>
      <div className={styles["advertising-screen"]}>
        <h2>Advertising!</h2>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/VH-Rm6emTl8?si=yZujUqvFYQvcESuV"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className={styles["button-bar"]}>
        <button
          id="btn"
          className={isButtonDisabled ? styles.advertsBtnDisabled : ""}
          disabled={isButtonDisabled}
          onClick={onSkipAdvertisement}
        >
          WEITER
        </button>
      </div>
    </>
  );
}
