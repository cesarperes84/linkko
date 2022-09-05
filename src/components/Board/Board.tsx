import React, { useContext, useEffect, useMemo, useState } from "react";
import WordleContext from "../../contexts/WordleContext";
import * as S from "./StyledBoard";
import { wordList } from "../../utility/wordList";

const Board = () => {
  const { state, setState } = useContext(WordleContext);
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
    if (round.length === 4) {
      setState((prevState: { isGameOver: boolean }) => ({
        ...prevState,
        isGameOver: true,
      }));
    }
  }, [round.length, setState]);

  const classNameSubItem = ({ i, j }: { i: number; j: number }) => {
    let item = "";
    if (isSubmitted && !isGameOver) {
      if (attempt[i]?.charAt(j) === solution.charAt(i)) {
        item = "flip green";
      } else if (solution.includes(attempt[i])) {
        item = "flip yellow";
      } else {
        item = "flip gray";
      }
    }
    if (!isSubmitted && !isGameOver) {
      item = "";
    }
    return item;
  };

  return (
    <>
      <S.Board>
        <ul>
          {[1, 2, 3].map((row, j) => (
            <li className="d-flex" key={j}>
              {emptyCells.map((col, i) => {
               return (
                <S.SubItem
                  className={`cell ${
                    round.length > j && classNameSubItem({ i, j })
                  } ${
                    round.length < j && 'lightGray'
                  }`}
                  key={`${i}-${j}`}
                >
                  {!isGameOver && round.length > j && round[j]?.charAt(i) /*  exibe o jogo atual após o round ter virado */}
                  {!isGameOver && round.length < j && round[(j-1)]?.charAt(i) /*  exibe o jogo anterior */}
                  {!isSubmitted && !isGameOver && round.length === j && userSolution[i] /*  exibe o jogo atual */}
                </S.SubItem>
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
