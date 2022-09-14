import React, { useEffect, useMemo, useState } from "react";
// import Alert from "@mui/material/Alert";
import { AlertsProps } from "./types";
import * as S from "./StyledAlerts";

const Alerts = ({
  round,
  solution,
}: AlertsProps) => {

  const hasDistinctNumbers = () => {
    return solution && Boolean(
      solution[0] === solution[1] ||
        solution[1] === solution[2] ||
        solution[0] === solution[2]
    );
  };

  const isPrime = () => {
    let isPrimeNumber = true;
    for (let i = 2; i < solution; i++) {
      if (solution % i == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    return isPrimeNumber;
  };

  const isPerfectSquare = (n: number) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  const isFibonacci = () =>
    isPerfectSquare(5 * solution[1] * solution[1] + 4) ||
    isPerfectSquare(5 * solution[1] * solution[1] - 4);

  return (
    <div style={{ marginTop: "8px" }}>
      {round.length >= 1 && (
        <S.Alert
          severity="warning"
          variant="outlined"

        >{`Hint: the 3 digits are ${
          hasDistinctNumbers() ? "NOT" : ""
        } distinct!`}</S.Alert>
      )}
      {round.length >= 1 && isPrime() && (
        <S.Alert
          severity="warning"
          variant="outlined"

        >Hint: the code is prime number!</S.Alert>
      )}
      {round.length >= 2 && (
        <S.Alert
          severity="warning"
          variant="outlined"

        >{`Hint: first digit is ${solution[0] % 2 === 0 ? "even" : "odd"}!`}</S.Alert>
      )}
      {(round.length >= 2 && isFibonacci()) && (
        <S.Alert
          severity="warning"
          variant="outlined"
          style={{ fontSize: "10px" }}
        >Hint: second digit belong fibonacci</S.Alert>
      )}
      {round.length === 3 && (
        <S.Alert
          severity="warning"
          variant="outlined"

        >{`Hint: last digit is ${solution[2] % 2 === 0 ? "even" : "odd"}!`}</S.Alert>
      )}
    </div>
  );
};

export default Alerts;
