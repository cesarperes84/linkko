import React, { memo, useEffect, useState } from "react";
import * as S from "./StyledBoardItem";

const rotationValues = [0, 90, 180, 270];

const BoardItem = ({
  item,
  configPositions,
  setConfigPositions,
  row,
}: {
  configPositions: any;
  item: any;
  setConfigPositions: any;
  row: number;
}) => {
  const [rotation, setRotation] = useState(0);
  const [initialRotation, setInitialRotation] = useState(0);
  const names = {
    0: "blank",
    1: "init-to-right",
    2: "init-to-left",
    3: "init-to-top",
    4: "init-to-bottom",
    5: "init-to-d-top-left",
    6: "init-to-d-top-right",
    7: "init-to-d-bottom-left",
    8: "init-to-d-bottom-right",
    9: "vertical",
    10: "diagonally",
    11: "horizontal",
    12: "capital-t",
    13: "top-left",
    14: "bottom-left",
    15: "top-right",
    16: "bottom-right",
    17: "d-left-top",
    18: "d-left-bottom",
    19: "d-right-top",
    20: "d-right-bottom",
    21: "end-to-right",
    22: "end-to-left",
    23: "end-to-top",
    24: "end-to-bottom",
    25: "end-to-d-top-left",
    26: "end-to-d-top-right",
    27: "end-to-d-bottom-left",
    28: "end-to-d-bottom-right",
  };

  const handleClick = () => {
    let newRotation = 0;
    if (rotation === 0) {
      newRotation = initialRotation + 90;
    } else {
      newRotation = rotation + 90;
    }
    setRotation(newRotation);
  };
  useEffect(() => {
    let randomRotation = rotationValues[Math.floor(Math.random() * 3) + 1];
    if (
      names[item] === "vertical" ||
      names[item] === "horizontal"
    ) {
      randomRotation = rotationValues[1];
    }
    setInitialRotation(randomRotation);
  }, []);

  useEffect(() => {
    if (
      rotation % 360 === 0 ||
      (rotation % 180 === 0 && names[item] === "vertical") ||
      (rotation % 180 === 0 && names[item] === "horizontal")
    ) {
      // TODO: inserir a coluna tbm como comparador caso tenha objetos iguais na mesma linha
      const updateConfigPositions = configPositions?.map((rowItem, index) =>
        rowItem.map((item1) =>
          item1.pos === item && index.toString() === row.toString()
            ? { ...item1, status: !item.status }
            : item1
        )
      );
      setConfigPositions(updateConfigPositions);
    }
  }, [item, rotation, setConfigPositions]);

  return (
    <S.Container onClick={handleClick}>
      <S.InnerItem
        type={names[item] || "blank"}
        rotation={rotation}
        initialRotation={initialRotation}
      />
    </S.Container>
  );
};

export default BoardItem;
