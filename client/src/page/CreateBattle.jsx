import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import { PageHOC, CustomButton, CustomInput, GameLoad } from "../components";
import { useGlobalContext } from "../context";

const CreateBattle = () => {
  const { contract, gameData, battleName, setBattleName, setErrorMessage } =
    useGlobalContext();
  const [waitBattle, setWaitBattle] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (gameData?.activeBattle?.battleStatus === 1) {
      navigate(`/battle/${gameData?.activeBattle?.name}`);
    } else if (gameData?.activeBattle?.battleStatus === 0) {
      setWaitBattle(true);
    }
  }, [gameData]);

  const handleClick = async () => {
    if (battleName === "" || battleName.trim() === "") return null;

    try {
      await contract.createBattle(battleName);

      setWaitBattle(true);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <>
      {waitBattle && <GameLoad />}

      <div className="flex flex-col mb-5">
        <CustomInput
          label="Battle"
          placeHolder="Enter battle name"
          value={battleName}
          handleValueChange={setBattleName}
        />

        <CustomButton
          title="Create Battle"
          handleClick={handleClick}
          restStyles="mt-6"
        />
      </div>
      <p className={styles.infoText} onClick={() => navigate("/join-battle")}>
        Join a summoners battle
      </p>
    </>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br />a new Battleground
  </>,
  <>Create your own Battleground and battle friends or foes!</>
);
