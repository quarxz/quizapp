import { useState } from "react";
import { useEffect } from "react";
import styles from "./AdvertisingScreen.module.css";

export function AdvertisingScreen({ onSkipAdvertisement }) {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    counter === 0 && setButtonDisabled(false);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <div className={styles["advertising-screen"]}>
        <h2>Taksoft</h2>
        <p>Bootcamp</p>
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
          className={isButtonDisabled ? styles.advertsBtnDisabled : ""}
          disabled={isButtonDisabled}
          onClick={onSkipAdvertisement}
        >
          {counter > 0 ? counter : "WEITER"}
        </button>
      </div>
    </>
  );
}
