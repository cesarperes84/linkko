import React, { useContext, useEffect, useMemo, useState } from "react";
import CodelyContext from "../../contexts/CodelyContext";
import * as S from "./StyledBoard";
import { wordList } from "../../utility/wordList";
import BoardItem from "../BoardItem";
import Alert from "@mui/material/Alert";

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

  const hasDistinctNumbers = () => {
    return Boolean(
      solution[0] === solution[1] ||
        solution[1] === solution[2] ||
        solution[0] === solution[2]
    );
  };

  const isPrime = () => {
    let isPrimeNumber = true;
    for (let i = 2; i < solution; i++) {
      if (solution % i == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    return isPrimeNumber;
  };

  const isPerfectSquare = (n: number) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  const isFibonacci = () =>
    isPerfectSquare(5 * solution[1] * solution[1] + 4) ||
    isPerfectSquare(5 * solution[1] * solution[1] - 4);

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
      {round.length >= 1 && (
        <Alert
          severity="error"
          variant="outlined"
          style={{ marginBottom: "5px", width: "320px" }}
        >{`The 3 digits are ${
          hasDistinctNumbers() ? "NOT" : ""
        } distinct!`}</Alert>
      )}
      {round.length >= 1 && (
        <Alert
          severity="error"
          variant="outlined"
          style={{ marginBottom: "5px", width: "320px" }}
        >{`The 3 digits sequence is ${
          isPrime() ? "" : "NOT"
        } prime number!`}</Alert>
      )}
      {round.length >= 2 && (
        <Alert
          severity="error"
          variant="outlined"
          style={{ marginBottom: "5px", width: "320px" }}
        >{`First digit is ${solution[0] % 2 === 0 ? "even" : "odd"}!`}</Alert>
      )}
      {round.length >= 2 && (
        <Alert
          severity="error"
          variant="outlined"
          style={{ marginBottom: "5px", width: "320px" }}
        >{`Second digit ${isFibonacci() ? "" : "NOT"} belong fibonacci`}</Alert>
      )}
      {round.length === 3 && (
        <Alert
          severity="error"
          variant="outlined"
          style={{ marginBottom: "5px", width: "320px" }}
        >{`Last digit is ${solution[2] % 2 === 0 ? "even" : "odd"}!`}</Alert>
      )}
      {isGameOver && <pre>{solution}</pre>}
    </>
  );
};

export default Board;
