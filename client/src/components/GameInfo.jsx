import React, { useState } from "react";
import styles from "../styles";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useGlobalContext } from "../context";
import { alertIcon, gameRules, summonerLogo } from "../assets";

const GameInfo = () => {
  const { contract, gameData, setShowAlert } = useGlobalContext();
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const navigate = useNavigate();

  const handleBattleExit = async () => {};

  return (
    <>
      <div className={styles.gameInfoIconBox}>
        <div
          className={`${styles.gameInfoIcon} ${styles.flexCenter}`}
          onClick={() => setToggleSideBar(true)}
        >
          <img
            src={alertIcon}
            alt="info"
            className={`${styles.gameInfoIconImg}`}
          />
        </div>
      </div>

      <div
        className={`${styles.gameInfoSidebar} ${
          toggleSideBar ? "translate-x-0" : "translate-x-full"
        } ${styles.glassEffect} ${styles.flexBetween} backdrop-blur-3xl`}
      >
        <div className={"flex flex-col"}>
          <div className={styles.gameInfoSidebarCloseBox}>
            <div
              className={`${styles.flexCenter} ${styles.gameInfoSidebarClose}`}
              onClick={() => setToggleSideBar(false)}
            >
              X
            </div>
          </div>
          <img
            src={summonerLogo}
            className="sm:w-[350px] md:w-[75%] lg:w-[85%] ml-auto mr-auto"
          />
          <h3 className={styles.gameInfoHeading}>How to Play:</h3>

          <div className="mt-3">
            {gameRules.map((rule, index) => (
              <p key={`game-rule-index`} className={styles.gameInfoText}>
                <span className="font-bold">{index + 1}</span>.{rule}
              </p>
            ))}
          </div>
        </div>

        <div className={`${styles.flexBetween} mt-10 gap-4 w-full`}>
          <CustomButton
            title={"Change Battleground"}
            handleClick={() => navigate("/battleground")}
          />
          <CustomButton title={"Exit Battle"} handleClick={handleBattleExit} />
        </div>
      </div>
    </>
  );
};

export default GameInfo;
