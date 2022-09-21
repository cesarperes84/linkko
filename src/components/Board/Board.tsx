import React, { useEffect, useState } from "react";
import * as S from "./StyledBoard";
import BoardItem from "../BoardItem";
import Alerts from "../Alerts";
import { Types } from "../../reducers/reducersCodly";
import { BoardProps } from "./types";
import formatDate from "../../utility/formatDate";
import Share from "../Share";

const Board = ({
  emptyCells,
  isSubmitted,
  isGameOver,
  nbAttempts,
  round,
  solution,
  userSolution,
  dispatchCodly,
  wordList,
}: BoardProps) => {
  const [attempt, setAttempt] = useState(userSolution);
  const today = formatDate({ date: Date.now(), formatString: "yyyy-MM-dd" });

  useEffect(() => {
    if (nbAttempts < 1) return;

    if (!isSubmitted && !isGameOver) {
      setAttempt(userSolution);
    }
  }, [isGameOver, isSubmitted, nbAttempts, userSolution]);

  useEffect(() => {
    if (
      (round.length === 4 && isSubmitted) ||
      !!round.find((item) => item === solution)
    ) {
      const statusGame = !!round.find((item) => item === solution)
        ? "matched"
        : "gameover";
      localStorage.setItem("activeStep", round.length.toString());
      localStorage.setItem("statusGame", statusGame);
      dispatchCodly({ type: Types.SetIsGameOver, payload: true });
    }
  }, [dispatchCodly, isSubmitted, round, solution]);

  useEffect(() => {
    if (wordList) {
      if (
        localStorage.getItem("gameDate") === today &&
        (localStorage.getItem("statusGame") === "matched" ||
          localStorage.getItem("statusGame") === "game-over")
      ) {
        // já jogou o dia de hoje
        dispatchCodly({ type: Types.SetIsGameOver, payload: true });
      } else {
        localStorage.setItem("statusGame", "started");
        localStorage.setItem("gameDate", today);
      }
    }
  }, [dispatchCodly, wordList, today]);

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
      {isGameOver && <Share round={round} solution={solution} />}
    </>
  );
};

export default Board;
