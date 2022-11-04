import React, { useEffect, useState } from "react";
import * as S from "./StyledBoard";
import BoardItem from "../BoardItem";
/* import Alerts from "../Alerts";
import { Types } from "../../reducers/reducersCodly";
import { BoardProps } from "./types";
import formatDate from "../../utility/formatDate";
import Share from "../Share"; */

const Board = ({
  configPositions,
  setConfigPositions,
}: {
  configPositions: any;
  setConfigPositions: any;
}) => {
  return (
    <>
      <S.Board>
        <ul>
          {configPositions.map((row, j) => (
            <li className="d-flex" key={j}>
              {row.map((item, index) => {
                return (
                  <BoardItem
                    configPositions={configPositions}
                    key={index}
                    item={item?.pos}
                    row={j}
                    setConfigPositions={setConfigPositions}
                  />
                );
              })}
            </li>
          ))}
        </ul>
      </S.Board>
      {/* <Alerts solution={solution} round={round} />
      {isGameOver && <Share round={round} solution={solution} statusGame={localStorage.getItem('statusGame') || 'started'} />} */}
    </>
  );
};

export default Board;
