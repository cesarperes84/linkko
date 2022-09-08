import React, { useEffect, useState } from "react";
import * as S from "./StyledBoardItem";

const initState = {
  className: 'lightGray',
};

const BoardItem = ({
  isSubmitted,
  isGameOver,
  solution,
  attempt,
  userSolution,
  i,
  j,
  round,
}: {
  isSubmitted: boolean;
  isGameOver: boolean;
  solution: string;
  attempt: any;
  userSolution: any;
  i: number;
  j: number;
  round: any;
}) => {
  const [state, setState] = useState(initState);

  /* const classNameSubItem = ({ i, j }: { i: number; j: number }) => {
   let item = "";
      if (attempt[i]?.charAt(j) === solution.charAt(i)) {
        item = "flip green";
      } else if (solution.includes(attempt[i])) {
        item = "flip yellow";
      } else {
        item = "flip gray";
      }
    if (!isSubmitted && !isGameOver) {
      item = "";
    }
    return item;
  }; */

  useEffect(() => {
    let className = "";


    if (isSubmitted && !isGameOver && j < round.length && round.length-1 === j) {
      // className = "flip gray";
      console.log('---');
      console.log('j', j);
      console.log('attempt[i]', attempt[i]);
      console.log('solution', solution);
      console.log('round.length', round.length);
      if (solution.includes(attempt[i])) {
        className = "flip yellow";
      } else if (attempt[i] === solution.charAt(i)) {
        className = "flip green";
      } else {
        className = "flip gray";
      }
      setState((prevState: { className: string; }) => ({
        ...prevState,
        className,
      }));
    }
    if (!isGameOver && j === round.length) {
      className = "";
      setState((prevState: { className: string; }) => ({
        ...prevState,
        className,
      }));
    }

  }, [attempt, i, isGameOver, isSubmitted, j, round, round.length, solution]);

  return (
    <S.SubItem className={state.className}>
      {
        !isGameOver &&
          round.length > j &&
          round[j]?.charAt(i) /*  exibe o jogo atual após o round ter virado */
      }
      {
        !isGameOver &&
          round.length < j &&
          round[j - 1]?.charAt(i) /*  exibe o jogo anterior */
      }
      {
        !isSubmitted &&
          !isGameOver &&
          round.length === j &&
          userSolution[i] /*  exibe o jogo atual */
      }
    </S.SubItem>
  );
};

export default BoardItem;
