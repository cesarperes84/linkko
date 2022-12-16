import React from "react";
import * as S from "./StyledLevel";

export const Alert = ({ level }: { level: number }) => (
  <S.Container>
    <S.Paragraph>LEVEL {level}</S.Paragraph>
  </S.Container>
);

export default Alert;
