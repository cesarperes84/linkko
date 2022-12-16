import React, { useEffect, useRef, useState, useId } from "react";
import * as S from "./StyledBoardItem";
import names from "../../const/names";
// import rotationValues from "../../const/rotationValues";
import Image from "next/image";
import guid from "../../utility/guid";

const BoardItem = ({
  item,
  level,
  row,
  col,
  status,
  initRotation,
  updateConfigPositions,
  isOpen,
}: {
  level: number;
  col: number;
  item: any;
  row: number;
  status: boolean;
  initRotation: number;
  updateConfigPositions: any;
}) => {
  const [rotation, setRotation] = useState(initRotation);
  const [initialRotation, setInitialRotation] = useState(initRotation);
  const ref = useRef(null);

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
      pos: item,
      col,
      row,
      level,
      status,
      rotation: newRotation,
    });
  };


  useEffect(() => {
    if (names[item] !== "blank" && !isOpen) {
      setTimeout(() => {
        setRotation(initRotation);
        ref.current.style.transform = `rotate(${initRotation}deg)`;
      }, 50);
    }
  }, [item, initRotation, isOpen]);


  return (
    <S.Container onClick={handleClick}>
      {!isOpen && (
        <S.InnerItem ref={ref} id={guid()}>
          <Image
            src={`/images/${names[item] || "blank"}.png`}
            alt="xxx"
            width={80}
            height={80}
          />
        </S.InnerItem>
      )}
    </S.Container>
  );
};

export default BoardItem;
