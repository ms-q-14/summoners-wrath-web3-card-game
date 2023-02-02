import React, { useState } from "react";
import { CustomInput, PageHOC, CustomButton } from "../components";

import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress, setShowAlert } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");

  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress);

      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName);

        setShowAlert({
          status: true,
          type: "info",
          message: `${playerName} has appeared in the rift!`,
        });
      }
    } catch (error) {
      setShowAlert({
        status: true,
        type: "failure",
        message: error.message || "Something went wrong!",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <CustomInput
        Label="Name"
        placeholder="Enter your summoner name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton
        title="Register"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to the Summoners Wrath! <br />A monster summoning Card Game
  </>,
  <>Connect to join the Rift!</>
);
