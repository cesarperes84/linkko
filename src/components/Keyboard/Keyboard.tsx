import React, { useCallback, useContext, useEffect, useState } from "react";
import CodelyContext from "../../contexts/CodelyContext";
import { middleRow, topRow, bottomRow } from "./constants";
import * as S from "./StyledKeyboard";

export default function Keyboard() {
  const { state, setState } = useContext(CodelyContext);

  const handleKeys = (key: string) => {
    if (state.isGameOver) return;

    if (key === "Enter") {
      setState(
        (prevState: {
          round: any;
          userSolution: string | any[];
          nbCols: number;
          rowIndex: number;
          nbAttempts: number;
          colIndex: any;
        }) => {
          const isUserSolutionInWordList = true;
          const isUserSolutionValidLen =
            prevState.userSolution.length >= prevState.nbCols;

          let isValidSolution = [
            isUserSolutionInWordList,
            isUserSolutionValidLen,
          ];
          let isValid = isValidSolution.every((v) => v);
          return {
            ...prevState,
            userSolution: isValid ? "" : prevState.userSolution,
            rowIndex: isValid ? prevState.rowIndex + 1 : prevState.rowIndex,
            round: [...prevState.round, prevState.userSolution],
            isSubmitted: true,
          };
        }
      );
    }

    if (key === "Backspace" || key === "←") {
      setState((prevState: { userSolution: string; colIndex: number }) => ({
        ...prevState,
        userSolution: prevState.userSolution.slice(0, -1) + "",
        isSubmitted: false,
      }));
    }

    if (/[0-9]/gi.test(key) && key.length === 1) {
      setState(
        (prevState: {
          userSolution: string;
          nbCols: any;
          colIndex: number;
        }) => ({
          ...prevState,
          userSolution:
            prevState.userSolution.slice(0, prevState.nbCols) +
            key.toLowerCase(),
          isSubmitted: false,
        })
      );
    }
  };

  const onKeyDown = (e: any) => {
    const key = e.key as string;
    handleKeys(key);
  };

  const onKeyboard = useCallback((letter: string) => {
    handleKeys(letter);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <S.Keyboard>
      <S.List>
        {topRow.map((letter) => (
          <S.Key
            key={letter}
            onClick={() => {
              onKeyboard(letter);
            }}
          >
            {letter}
          </S.Key>
        ))}
      </S.List>
      <S.List>
        {middleRow.map((letter) => (
          <S.Key
            key={letter}
            onClick={() => {
              onKeyboard(letter);
            }}
          >
            {letter}
          </S.Key>
        ))}
      </S.List>
      <S.List style={{ justifyContent: "center" }}>
        {bottomRow.map((letter) => (
          <S.Key
            key={letter}
            onClick={() => {
              onKeyboard(letter);
            }}
            style={{ width: "120px" }}
          >
            {letter}
          </S.Key>
        ))}
      </S.List>
    </S.Keyboard>
  );
}
