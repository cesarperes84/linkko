import React, { useEffect, useRef, useState } from "react";
import * as S from "./StyledBoardItem";
import names from "../../const/names";
import Image from "next/image";
import guid from "../../utility/guid";

const BoardItem = ({
  pos,
  row,
  col,
  status,
  initRotation,
  updateConfigPositions,
  isOpen,
}: {
  col: number;
  pos: number;
  isOpen: boolean;
  row: number;
  status: boolean;
  initRotation: number;
  updateConfigPositions: any;
}) => {
  const [rotation, setRotation] = useState(initRotation);
  const [initialRotation, setInitialRotation] = useState(initRotation);
  const ref = useRef<any>(null);
  const nameItem = (names as any)[pos];

  const handleClick = () => {
    let newRotation = 0;

    if (rotation === 0) {
      newRotation = initialRotation + 90;
    } else {
      newRotation = rotation + 90;
    }

    setRotation(newRotation);
    ref.current.style.transform = `rotate(${newRotation}deg)`;
    updateConfigPositions({
      pos,
      col,
      row,
      status,
      rotation: newRotation,
    });
  };

  useEffect(() => {
    if (nameItem !== "blank" && !isOpen) {
      setTimeout(() => {
        setRotation(initRotation);
        ref.current.style.transform = `rotate(${initRotation}deg)`;
      }, 50);
    }
  }, [initRotation, isOpen, nameItem]);

  let component = (
    <S.Container onClick={nameItem !== "blank" ? handleClick : () => {}}>
      {!isOpen && (
        <S.Item ref={ref} id={guid()}>
          <Image
            src={`/images/${nameItem || "blank"}.png`}
            alt="xxx"
            width={80}
            height={80}
          />
        </S.Item>
      )}
    </S.Container>
  );

  return component;
};

export default BoardItem;
