import React, { useEffect, useMemo, useState } from "react";
import Alert from "@mui/material/Alert";
import { AlertsProps } from "./types";

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
        <Alert
          severity="warning"
          variant="outlined"
          style={{ marginBottom: "5px", width: "250px", fontSize: "12px", height: "40px",
          padding: "0 10px" }}
        >{`Hint: the 3 digits are ${
          hasDistinctNumbers() ? "NOT" : ""
        } distinct!`}</Alert>
      )}
      {round.length >= 1 && isPrime() && (
        <Alert
          severity="warning"
          variant="outlined"
          style={{ marginBottom: "5px", width: "250px", fontSize: "12px", height: "40px",
          padding: "0 10px" }}
        >Hint: the code is prime number!</Alert>
      )}
      {round.length >= 2 && (
        <Alert
          severity="warning"
          variant="outlined"
          style={{ marginBottom: "5px", width: "250px", fontSize: "12px", height: "40px",
          padding: "0 10px" }}
        >{`Hint: first digit is ${solution[0] % 2 === 0 ? "even" : "odd"}!`}</Alert>
      )}
      {(round.length >= 2 && isFibonacci()) && (
        <Alert
          severity="warning"
          variant="outlined"
          style={{ marginBottom: "5px", width: "250px", fontSize: "10px", height: "40px",
          padding: "0 10px" }}
        >Hint: second digit belong fibonacci</Alert>
      )}
      {round.length === 3 && (
        <Alert
          severity="warning"
          variant="outlined"
          style={{ marginBottom: "5px", width: "250px", fontSize: "12px", height: "40px",
          padding: "0 10px" }}
        >{`Hint: last digit is ${solution[2] % 2 === 0 ? "even" : "odd"}!`}</Alert>
      )}
    </div>
  );
};

export default Alerts;
