import React, { useContext, useEffect, useMemo, useState } from "react";
import CodelyContext from "../../contexts/CodelyContext";
import * as S from "./StyledBoard";
import { wordList } from "../../utility/wordList";
import BoardItem from "../BoardItem";

const Board = () => {
  const { state, setState } = useContext(CodelyContext);
  const {
    emptyCells,
    isSubmitted,
    isGameOver,
    nbAttempts,
    round,
    rowIndex,
    solution,
    userSolution,
  } = state;
  const [attempt, setAttempt] = useState(userSolution);

  const wordListMemo = useMemo(() => {
    wordList.shift();
    return wordList;
  }, []);

  useEffect(() => {
    if (nbAttempts < 1) return;

    if (!isSubmitted && !isGameOver) {
      setAttempt(userSolution);
    }
  }, [isGameOver, isSubmitted, nbAttempts, userSolution]);

  useEffect(() => {
    if (round.length === 4 && isSubmitted) {
      setState((prevState: { isGameOver: boolean }) => ({
        ...prevState,
        isGameOver: true,
      }));
    }
  }, [isSubmitted, round, setState]);

  return (
    <>
      <S.Board>
        <ul>
          {[1, 2, 3, 4].map((row, j) => (
            <li className="d-flex" key={j}>
              {emptyCells.map((col, i) => {
                return (
                  <BoardItem
                    isSubmitted={isSubmitted}
                    isGameOver={isGameOver}
                    solution={solution}
                    attempt={attempt}
                    i={i}
                    j={j}
                    round={round}
                    key={`${i}-${j}`}
                    userSolution={userSolution}
                  />
                );
              })}
            </li>
          ))}
        </ul>
      </S.Board>
      {isGameOver && <pre>{`GAME OVER!!! Solution is: ${solution}`}</pre>}
    </>
  );
};

export default Board;
