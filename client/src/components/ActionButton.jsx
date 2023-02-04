import React from "react";
import styles from "../styles";

const ActionButton = ({ imgUrl, handlClick, restStyles }) => {
  return (
    <div
      className={`${styles.gameMoveBox} ${styles.flexCenter} ${styles.glassEffect} ${restStyles}`}
    >
      <img src={imgUrl} alt="actionImg" className={`${styles.gameMoveIcon}`} />
    </div>
  );
};

export default ActionButton;
