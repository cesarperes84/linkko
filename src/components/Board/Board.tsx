import React, { useEffect, useMemo, useState } from "react";
import * as S from "./StyledBoard";
import BoardItem from "../BoardItem";
import Alerts from "../Alerts";
import { Types } from '../../reducers/reducersCodly';
import { BoardProps } from "./types";

const Board = ({
  emptyCells,
  isSubmitted,
  isGameOver,
  nbAttempts,
  round,
  solution,
  userSolution,
  wordList,
  dispatchCodly,
}: BoardProps) => {
  const [attempt, setAttempt] = useState(userSolution);

  const wordListMemo = useMemo(() => {
    wordList.shift();
    return wordList;
  }, [wordList]);

  useEffect(() => {
    if (nbAttempts < 1) return;

    if (!isSubmitted && !isGameOver) {
      setAttempt(userSolution);
    }
  }, [isGameOver, isSubmitted, nbAttempts, userSolution]);

  useEffect(() => {
    if (round.length === 4 && isSubmitted || !!round.find((item) => item === solution)) {
      dispatchCodly({ type: Types.SetIsGameOver, payload: true });
    }
  }, [dispatchCodly, isSubmitted, round, solution]);

  return (
    <>
      <S.Board>
        <ul>
          {[1, 2, 3, 4].map((row, j) => (
            <li className="d-flex" key={j}>
              {emptyCells.map((col: any, i: number) => {
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
      <Alerts solution={solution} round={round} />
      {isGameOver && <pre>{solution}</pre>}
    </>
  );
};

export default Board;
