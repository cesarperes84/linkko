export type WordList = {
  code: string;
  date: string;
};

export type BoardProps = {
  wordList: WordList;
  solution: any;
  emptyCells: any;
  nbAttempts: number;
  round: Array<string>;
  isGameOver: boolean;
  isSubmitted: boolean;
  userSolution: string;
  dispatchCodly: any;
};
