import { creatArr } from "../utility/helper";

export const initState = {
    wordList: [],
    solution: '',
    emptyCells: creatArr(3),
    nbRows: 3,
    nbCols: 3,
    nbAttempts: 6,
    round: [],
    isGameOver: false,
    isSubmitted: false,
    userSolution: '',
    isUserSolutionValidLen: false,
    isUserSolutionInWordList:false,
    rowIndex: 0,
    colIndex: 0,
  }
