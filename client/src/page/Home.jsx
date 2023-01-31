import React, { useState } from "react";
import { CustomInput, PageHOC, CustomButton } from "../components";

import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");

  return (
    <div className="flex flex-col">
      <CustomInput
        Label="Name"
        placeholder="Enter your summoner name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton title="Register" handleClick={() => {}} restStyles="mt-6" />
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
