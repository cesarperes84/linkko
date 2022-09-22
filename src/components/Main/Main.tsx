import React, { useEffect } from "react";
import Board from "../Board";
import Keyboard from "../Keyboard";
import Header from "../Header";
import ModalHome from "../ModalHome";
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
      <Header />
      <ModalHome />
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
