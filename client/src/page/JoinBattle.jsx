import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";
import { CustomButton, PageHOC } from "../components";
import styles from "../styles";

const JoinBattle = () => {
  const navigate = useNavigate();
  const {
    contract,
    gameData,
    setShowAlert,
    setBattleName,
    setErrorMessage,
    walletAddress,
  } = useGlobalContext();

  useEffect(() => {
    if (
      gameData &&
      gameData.activeBattle &&
      gameData.activeBattle.battleStatus === 1
    )
      navigate(`/battle/${gameData.activeBattle.name}`);
  }, [gameData, navigate]);

  const handleClick = async (battleName) => {
    setBattleName(battleName);

    try {
      await contract.joinBattle(battleName);

      setShowAlert({
        status: true,
        type: "success",
        message: `Joining ${battleName}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <h2 className={styles.joinHeadText}> Active Battlegrounds:</h2>

        <div className={styles.joinContainer}>
          {gameData.pendingBattles.length ? (
            gameData.pendingBattles
              .filter((battle) => !battle.players.includes(walletAddress))
              .map((battle, index) => (
                <div key={battle.name + index} className={styles.flexBetween}>
                  <p className={styles.joinBattleTitle}>
                    {index + 1}. {battle.name}{" "}
                  </p>
                  <CustomButton
                    title="Join"
                    handleClick={() => handleClick(battle.name)}
                  />
                </div>
              ))
          ) : (
            <p className={styles.joinLoading}>
              No active Battlegrounds found. Relead to see new ones.
            </p>
          )}
        </div>

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
