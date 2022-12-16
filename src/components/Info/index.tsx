import React from "react";
import * as S from "./StyledLevel";

export const ModalHome = ({ level }: { level: number }) => (
  <S.Container>
    <S.Paragraph>LEVEL {level}</S.Paragraph>
  </S.Container>
);

export default ModalHome;
