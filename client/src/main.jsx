import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, CreateBattle, JoinBattle, Battle, Battleground } from "./page";
import { GlobalContextProvider } from "./context";
import "./index.css";
import { OnboardModal } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalContextProvider>
      {/* This is the modal that pops up when you load the site and you have no AVAX in wallet */}
      <OnboardModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-battle" element={<CreateBattle />} />
        <Route path="/join-battle" element={<JoinBattle />} />
        <Route path="/battleground" element={<Battleground />} />
        <Route path="/battle/:battleName" element={<Battle />} />
      </Routes>
    </GlobalContextProvider>
  </BrowserRouter>
);
