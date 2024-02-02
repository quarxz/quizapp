import styles from "./WelcomeScreen.module.css";

export function WelcomeScreen() {
  return (
    <>
      <div className={styles["welcome-screen"]}>
        <h2>Welcome!</h2>
        <p>Testen Sie Ihr CSS Wissen!</p>
      </div>
      <div className={styles["button-bar"]}>
        <button>START</button>
      </div>
    </>
  );
}
