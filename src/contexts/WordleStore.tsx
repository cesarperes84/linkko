import React, { useState } from "react";
import { creatArr } from "../utility/helper";
import WordleContext from "./WordleContext";
import { initState } from "./initState";


export const WordleStore = ({ children, wordList, solution, nbRows, nbCols }: any) => {
  const [state, setState] = useState({
    ...initState,
    wordList,
    solution,
    nbCols: nbCols || 3,
    emptyCells: creatArr(nbCols || 3)
  });

  return <WordleContext.Provider value={{ state, setState }}>
    {children}
  </WordleContext.Provider>
};
