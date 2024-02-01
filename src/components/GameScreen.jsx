import styles from "./GameScreen.module.css";

export function GameScreen() {
  return (
    <div className={styles["game-field"]}>
      <h2>Question</h2>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
        <li>Limo</li>
      </ul>
    </div>
  );
}
