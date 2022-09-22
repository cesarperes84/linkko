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
      <div style={{ display: "flex", height: "35px" }}>
        <div style={{ background: "#00af80", height: "30px", width: "30px", borderRadius: "40px", padding: "5px"}}>
          <LockIcon fontSize="large" style={{ fontSize: "20px" }} />
        </div>
        <h1
          className="center"
          style={{ fontFamily: "'Fugaz One'", fontSize: "26px", fontWeight: "normal", marginLeft: "5px" }}
        >
          Codly
        </h1>
      </div>
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
        {solution !== '' &&
          <Keyboard
            isSubmitted={isSubmitted}
            isGameOver={isGameOver}
            dispatchCodly={dispatchCodly}
            round={round}
            solution={solution}
          />
        }
      </div>
    </>
  );
};

export default Main;
