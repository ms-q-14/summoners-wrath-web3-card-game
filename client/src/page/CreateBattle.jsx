import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import { PageHOC, CustomButton, CustomInput } from "../components";
import { useGlobalContext } from "../context";

const CreateBattle = () => {
  const { contract, battleName, setBattleName } = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <>
      <div className="flex flex-col mb-5">
        <CustomInput
          label={"Battle"}
          placeholder={"Enter battle name"}
          value={battleName}
          handleValueChange={setBattleName}
        />

        <CustomButton
          title={"Create Battle"}
          handelClick={handleClick}
          restStyles={"mt-6"}
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
