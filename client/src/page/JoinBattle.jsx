import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { PageHOC, CustomButton } from "../components";
import styles from "../styles";

const JoinBattle = () => {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <h2 className={styles.joinHeadText}> Active Battlegrounds:</h2>
        <p
          className={styles.infoText}
          onClick={() => navigate("/create-battle")}
        >
          Create your own Battleground
        </p>
      </>
    </div>
  );
};

export default PageHOC(
  JoinBattle,
  <>
    Join <br />a Battleground
  </>,
  <>
    Rally your summons and storm into another summoner's rift,
    <br /> it's time to conquer and claim it as your own!
  </>
);
