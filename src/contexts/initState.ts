import { creatArr } from "../utility/helper";

export const initState = {
    wordList: {
      code: '',
      date: '',
    },
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
