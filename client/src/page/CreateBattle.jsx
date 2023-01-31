import React from "react";
import { PageHOC } from "../components";

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Create Battle</h1>
    </div>
  );
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br />a new Battleground
  </>,
  <>Create your own Battleground and battle friends or foes!</>
);
