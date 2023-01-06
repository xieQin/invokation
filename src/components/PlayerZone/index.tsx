import { CSSProperties } from "react";

import styles from "./index.module.css";

export default function PlayerZone(props: {
  style?: CSSProperties;
  player: "own" | "opposite";
}) {
  const { player } = props;
  return (
    <div
      className={`${styles.PlayerZone} ${
        player === "opposite" ? styles.Opposite : ""
      }`}
      {...props}
    >
      <div className={styles.PlayerContent}>
        <div className={styles.PlayerAvatar}></div>
        <div className={styles.PlayerInfo}>
          <div className={styles.PlayerName}>Lumin</div>
          <div className={styles.PlayerStatus}>Now Acting</div>
        </div>
      </div>
    </div>
  );
}
