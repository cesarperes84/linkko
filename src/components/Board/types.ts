export type BoardProps = {
  wordList: never[];
  solution: any;
  emptyCells: any;
  nbAttempts: number;
  round: Array<string>;
  isGameOver: boolean;
  isSubmitted: boolean;
  userSolution: string;
  dispatchCodly: any;
};
