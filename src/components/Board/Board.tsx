import React, { useEffect, useState, useId } from "react";
import * as S from "./StyledBoard";
import BoardItem from "../BoardItem";

const Board = ({
  configPositions,
  isOpen,
  updateConfigPositions,
}: {
  configPositions: any,
  isOpen: boolean;
  updateConfigPositions: any;
}) => {
  const id = useId();

  return (
    <>
      <S.Board>
        <ul>
          {configPositions.map((row: { pos: number; status: boolean; rotation: number; }[], j: number) => (
            <li className="d-flex" key={`${id}-${j}`}>
              {row.map((item: { pos: any; status: boolean; rotation: number; }, index: number) => {
                return (
                  <BoardItem
                    isOpen={isOpen}
                    key={`${id}-${j}-${index}`}
                    pos={item?.pos}
                    row={j}
                    col={index}
                    status={item?.status}
                    initRotation={item?.rotation}
                    updateConfigPositions={updateConfigPositions}
                  />
                );
              })}
            </li>
          ))}
        </ul>
      </S.Board>
    </>
  );
};

export default Board;
