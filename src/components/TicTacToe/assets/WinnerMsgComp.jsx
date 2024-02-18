import { useMemo, memo } from "react";
import styles from "./TicTacToe.module.css";
const WinnerMsg = ({ winnerState, winnerStr, resetBoxes }) => {
  const animeStr = useMemo(() => {
    let anime = "";
    if (winnerStr !== undefined) {
      anime = winnerStr.map((str) => {
        return [...str].map((char, k) => {
          return `<span style="animation-delay:${k / 10}s;">${char}</span>`;
        });
      });
      anime = anime.reduce((acc, prev) => acc + "&nbsp;&nbsp;" + prev + "&nbsp;&nbsp;");
    }
    return anime;
  }, [winnerStr]);

  let hideClass = !winnerState ? styles.hide : "";
  return (
    <div className={`${hideClass} ${styles.container}`}>
      <p id={styles["msg"]} dangerouslySetInnerHTML={{ __html: animeStr.replaceAll(",", "") }}></p>
      <button className={styles.rstBtn} onClick={resetBoxes}>
        New Game
      </button>
    </div>
  );
};

const WinnerMsgComp = memo(WinnerMsg);
export default WinnerMsgComp;
