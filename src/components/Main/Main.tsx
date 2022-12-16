import React, { useEffect, useState } from "react";
import Board from "../Board";
import Header from "../Header";
import Alert from "../Alert";
import Info from "../Info";

import { useConnectioContext } from "../../contexts/ConnectioContext";
import Share from "../Share";

const Main = () => {
  const {
    configPositions,
    isOpen,
    isGameOver,
    level,
    play,
    gameOver,
    toogleAlert,
    updateConfigPositions,
  } = useConnectioContext();

  useEffect(() => {
    let dontTurnAll: any[] = [];
    configPositions?.forEach((row) => {
      dontTurnAll = [
        ...dontTurnAll,
        !!!row.find((item) => item.status === false),
      ];
    });

    const hasAnyToTurn =
      dontTurnAll.filter((item) => item === false)?.length || 0;

    if (hasAnyToTurn === 0) {
      setTimeout(() => {
        toogleAlert();
      }, 500);
    }

    if (level === 8) {
      gameOver();
    }
  }, [configPositions, gameOver, level, toogleAlert]);

  return (
    <>
      <Header />
      {configPositions && !isGameOver && (
        <>
          <Info level={level} />
          <Board
            isOpen={isOpen}
            configPositions={configPositions}
            updateConfigPositions={updateConfigPositions}
          />
        </>
      )}
      <Alert isOpen={isOpen && !isGameOver} play={play} />
      {isGameOver && <Share level={level} />}
    </>
  );
};

export default Main;
