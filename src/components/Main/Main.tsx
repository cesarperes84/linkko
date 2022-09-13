import React, { useEffect } from "react";
import Board from "../Board";
import Keyboard from "../Keyboard";
import LockIcon from "@mui/icons-material/Lock";
import { useCodlyContext } from "../../contexts/CodlyContext";

const Main = () => {
  const {
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
   } = useCodlyContext();

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <LockIcon fontSize="large" style={{ fontSize: "60px" }} />
        <h1
          className="center"
          style={{ fontFamily: "Roboto Condensed", fontSize: "22px" }}
        >
          CODLY
        </h1>
      </div>
      <p style={{ textAlign: "center" }}>
        Crack the code. A numeric lock has 3 digit key, <br /> from 0 to 9. You
        have 4 CHANCES. Good Lucky!!!
      </p>
      <Board
        emptyCells={emptyCells}
        isSubmitted={isSubmitted}
        isGameOver={isGameOver}
        nbAttempts={nbAttempts}
        round={round}
        solution={solution}
        userSolution={userSolution}
        wordList={wordList}
        dispatchCodly={dispatchCodly}
      />
      <div className="center">
        <Keyboard
          isGameOver={isGameOver}
          dispatchCodly={dispatchCodly}
        />
      </div>
    </>
  );
};

export default Main;
