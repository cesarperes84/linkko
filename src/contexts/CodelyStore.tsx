import React, { useState } from "react";
import { creatArr } from "../utility/helper";
import CodelyContext from "./CodelyContext";
import { initState } from "./initState";


export const CodelyStore = ({ children, wordList, solution, nbRows, nbCols }: any) => {
  const [state, setState] = useState({
    ...initState,
    wordList,
    solution,
    nbCols: nbCols || 3,
    emptyCells: creatArr(nbCols || 3)
  });

  return <CodelyContext.Provider value={{ state, setState }}>
    {children}
  </CodelyContext.Provider>
};
