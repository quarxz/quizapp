import { useState } from "react";
import { useEffect } from "react";
import styles from "./AdvertisingScreen.module.css";

export function AdvertisingScreen({ onSkipAdvertisement }) {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer =
      countdown > 0 &&
      setInterval(() => setCountdown(countdown - 1), 1000);
    countdown === 0 && setButtonDisabled(false);
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <>
      <div className={styles["advertising-screen"]}>
        <h2>Taksoft Bootcamp</h2>
        <h3>Es ist toll!</h3>
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
          {countdown > 0 ? countdown : "WEITER"}
        </button>
      </div>
    </>
  );
}
