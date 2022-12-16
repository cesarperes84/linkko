import React, { useEffect, useState, useId } from "react";
import * as S from "./StyledBoard";
import BoardItem from "../BoardItem";
/*
import { Types } from "../../reducers/reducersCodly";
import { BoardProps } from "./types";
import formatDate from "../../utility/formatDate";
import Share from "../Share"; */

const Board = ({
  configPositions,
  level,
  setConfigPositions,
  updateConfigPositions,
  isOpen,
}: {
  configPositions: any;
  level: number;
  setConfigPositions: any;
  updateConfigPositions: any;
  isOpen: boolean;
}) => {
  const id = useId();
  // console.log('configPositions', configPositions);
  return (
    <>
      <S.Board>
        <ul>
          {configPositions.map((row, j) => (
            <li className="d-flex" key={`${id}-${j}`}>
              {row.map((item, index) => {
                // if (item.pos !== 0) {console.log('item', item);}
                return (
                  <BoardItem
                    isOpen={isOpen}
                    level={level}
                    key={`${id}-${j}-${index}`}
                    item={item?.pos}
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
      {/*
      {isGameOver && <Share round={round} solution={solution} statusGame={localStorage.getItem('statusGame') || 'started'} />} */}
    </>
  );
};

export default Board;
