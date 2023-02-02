import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

import { summonerLogo, footerNight } from "../assets";
import styles from "../styles";
import Alert from "./Alert";

const PageHOC = (Componenet, title, description) => () => {
  const { showAlert } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className={styles.hocContainer}>
      {showAlert?.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}

      <div className={styles.hocContentBox}>
        <img
          src={summonerLogo}
          alt="logo"
          className={"w-[600px] h-[200px]  object-contain cursor-pointer"}
          onClick={() => navigate("/")}
        />

        <div className={styles.hocBodyWrapper}>
          <div className="flex flex-row w-full">
            <h1 className={`flex ${styles.headText} head-text `}>{title}</h1>
          </div>
          <p className={`${styles.normalText} my-10`}>{description}</p>
          <Componenet />
        </div>
      </div>
      <div className="flex flex-1">
        <img
          src={footerNight}
          alt="footer"
          className="w-full xl:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default PageHOC;
