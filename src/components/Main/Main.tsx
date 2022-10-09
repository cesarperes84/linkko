import React, { useEffect, useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <Header />
      <ModalHome isOpen={isOpen} setIsOpen={setIsOpen} />
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
        {solution !== "" && !isOpen && (
          <Keyboard
            isSubmitted={isSubmitted}
            isGameOver={isGameOver}
            dispatchCodly={dispatchCodly}
            userSolution={userSolution}
            solution={solution}
          />
        )}
      </div>
    </>
  );
};

export default Main;
