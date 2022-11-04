import React, { useEffect, useState } from "react";
import Board from "../Board";
import Header from "../Header";
import { useCodlyContext } from "../../contexts/CodlyContext";
// import Share from "../Share";

const rotationValues = [0, 90, 180, 270];

const configPositionsInitial = [
  [
    { pos: 0, status: true },
    { pos: 1, status: false, },
    { pos: 11, status: false },
    { pos: 15, status: false },
  ],
  [
    { pos: 0, status: true },
    { pos: 0, status: true },
    { pos: 0, status: true },
    { pos: 9, status: false },
  ],
  [
    { pos: 0, status: true },
    { pos: 0, status: true },
    { pos: 0, status: true },
    { pos: 9, status: false },
  ],
  [
    { pos: 0, status: true },
    { pos: 0, status: true },
    { pos: 0, status: true },
    { pos: 9, status: false },
  ],
  [
    { pos: 0, status: true },
    { pos: 1, status: false },
    { pos: 11, status: false },
    { pos: 16, status: false },
  ],
];

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
  const [isOpen, setIsOpen] = useState(true);
  const [isGameOver, setGameOver] = useState(false);
  const [configPositions, setConfigPositions] = useState(
    configPositionsInitial
  );

  /* useEffect(() => {
    loadData();
  }, [loadData]); */

  useEffect(() => {
    let dontTurnAll: any[] = [];
    configPositions?.forEach((row) => {
      dontTurnAll = [...dontTurnAll, !!!row.find((item) =>
        item.status === false)];
    });
    const hasAnyToTurn = dontTurnAll.filter((item) => item === false)?.length || 0;

    if (hasAnyToTurn === 0) {
      setGameOver((prev) => !prev);
    }
  }, [configPositions]);

  return (
    <>
      <Header />
      <Board
        configPositions={configPositions}
        setConfigPositions={setConfigPositions}
      />
      {isGameOver && "GAME OVER!!!"}
    </>
  );
};

export default Main;
