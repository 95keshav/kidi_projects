import styles from "./TicTacToe.module.css";
const Square = ({ index, onBoxClicked, value }) => {
  const combinedClasses = `${styles.btn} ${value ? styles.clicked : ""}`;
  return (
    <button key={index} className={combinedClasses} onClick={onBoxClicked} disabled={value !== null ? true : false}>
      {value}
    </button>
  );
};

const GameBoard = ({ boxClicked, pattern }) => {
  return (
    <div className={styles.game}>
      {pattern.map((box, index) => (
        <Square key={index} index={index} onBoxClicked={() => boxClicked(index)} value={box.value} />
      ))}
    </div>
  );
};

export default GameBoard;
