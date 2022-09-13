import React from "react";
import Board from "../Board";
import Keyboard from "../Keyboard";
import LockIcon from '@mui/icons-material/Lock';
import { CodelyStore } from "../../contexts/CodelyStore";

const Main = ({ wordList, solution }: {
  wordList: any;
  solution: any;
}) => (
  <CodelyStore wordList={wordList} solution={solution}>
    <div style={{ display: 'flex' }}>
    <LockIcon fontSize="large" style={{ fontSize: "60px" }} />
    <h1 className="center" style={{ fontFamily: 'Roboto Condensed', fontSize: '22px' }}>
      CODLY
    </h1>
    </div>
    <p style={{ textAlign: 'center' }}>Crack the code. A numeric lock has 3 digit key, <br /> from 0 to 9. You have 4 CHANCES. Good Lucky!!!</p>
    <Board />
    <div className="center">
      <Keyboard />
    </div>
  </CodelyStore>
);

export default Main;
