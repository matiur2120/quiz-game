import React from "react";
import { useSelector } from "react-redux";
import * as stages from "../utils/constants";
import EndGame from "./EndGamePage";
import Faching from "./FachingPage";
import Game from "./GamePage";
import StartGame from "./StartGamePage";

const MainPage = () => {
  const currentStage = useSelector((state) => state.gameState.stage);
  let displayedPage;
  switch (currentStage) {
    case stages.START_GAME:
      displayedPage = <StartGame />;
      break;
    case stages.FEACHING_GAME:
      displayedPage = <Faching />;
      break;
    case stages.GAME:
      displayedPage = <Game />;
      break;
    case stages.END_GAME:
      displayedPage = <EndGame />;
      break;
    default:
      break;
  }

  return <div>{displayedPage}</div>;
};

export default MainPage;
