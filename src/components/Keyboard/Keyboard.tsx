import React, { useCallback, useEffect } from "react";
import { middleRow, topRow, bottomRow } from "./constants";
import {  Types } from '../../reducers/reducersCodly';
import * as S from "./StyledKeyboard";

export default function Keyboard({ dispatchCodly, isGameOver }: {
  isGameOver: boolean,
  dispatchCodly: any;
}) {
  const handleKeys = (key: string) => {
    if (isGameOver) return;

    if (key === "Enter") {
      dispatchCodly({ type: Types.SetEnterKey });
    }

    if (key === "Backspace" || key === "←") {
      dispatchCodly({ type: Types.SetBackspaceKey, payload: key  });
    }

    if (/[0-9]/gi.test(key) && key.length === 1) {
      dispatchCodly({ type: Types.SetAnyKey, payload: key  });
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
            style={{ width: "90px" }}
          >
            {letter}
          </S.Key>
        ))}
      </S.List>
    </S.Keyboard>
  );
}
