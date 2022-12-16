import React, { useEffect, useState } from "react";
import Board from "../Board";
import Header from "../Header";
import ModalHome from "../ModalHome";
import Info from "../Info";
import configInitialsPositions from "../../const";
import names from "../../const/names";

// import { useCodlyContext } from "../../contexts/CodlyContext";
// import Share from "../Share";

const Main = () => {
  /* const {
    emptyCells,
    isSubmitted,
    isGameOver,
    nbAttempts,
    round,
    solution,
    userSolution,
    wordList,
    loadData,
    dispatchCodly,
  } = useCodlyContext(); */
  const [level, setLevel] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [configPositions, setConfigPositions] = useState(
    configInitialsPositions[1]
  );

  /* useEffect(() => {
    loadData();
  }, [loadData]); */

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
        setIsOpen((prev) => !prev);
      }, 500);
    }
  }, [configPositions]);

  const updateConfigPositions = ({
    pos,
    col,
    row,
    level,
    status,
    rotation,
  }) => {
    let newStatus = status;

    if (rotation !== 0 && rotation % 360 === 0) {
      newStatus = !status;
    }

    if (
      (rotation % 180 === 0 && names[pos] === "vertical") ||
      (rotation % 180 === 0 && names[pos] === "horizontal")
    ) {
      newStatus = true;
    } else if (
      (rotation % 180 !== 0 && names[pos] === "vertical") ||
      (rotation % 180 !== 0 && names[pos] === "horizontal")
    ) {
      newStatus = false;
    }

    const updateConfigPositions = configPositions?.map((rowItem, index) =>
        rowItem.map((item1, index2) =>
          item1.pos === pos &&
          index.toString() === row.toString() &&
          col.toString() === index2.toString()
            ? { ...item1, status: newStatus }
            : item1
        )
      );
      setConfigPositions(updateConfigPositions);
  };

  const play = () => {
    const newLevel = level + 1;
    setLevel(newLevel);
    setConfigPositions(configInitialsPositions[newLevel]);
    setIsOpen((prev) => !prev);
  };

  console.log(configPositions);

  return (
    <>
      <Header />
      <Info level={level} />
      {configPositions && (
        <Board
          isOpen={isOpen}
          level={level}
          configPositions={configPositions}
          setConfigPositions={setConfigPositions}
          updateConfigPositions={updateConfigPositions}
        />
      )}
      <ModalHome isOpen={isOpen} setIsOpen={play} />
    </>
  );
};

export default Main;
