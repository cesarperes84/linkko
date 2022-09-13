


export enum Types {
  SetIsGameOver = "setIsGameOver",
  SetInitialData = "SetInitialData",
  SetBackspaceKey = "SetBackspaceKey",
  SetEnterKey = "SetEnterKey",
  SetAnyKey = "SetAnyKey",
}

export type StateType = {
  wordList: never[];
  solution: string;
  emptyCells: any;
  nbRows: number;
  nbCols: number;
  nbAttempts: number;
  round: Array<string>;
  isGameOver: boolean;
  isSubmitted: boolean;
  userSolution: string;
  isUserSolutionValidLen: boolean;
  isUserSolutionInWordList: boolean;
  rowIndex: number;
  colIndex: number;
};

export type ActionType = {
  type: Types;
  payload?: any;
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case Types.SetIsGameOver:
      return {
        ...state,
        isGameOver: action.payload,
      };
    case Types.SetInitialData:
      return {
        ...state,
        solution: action.payload[0],
        wordList: action.payload,
      };
      case Types.SetBackspaceKey: {
        return {
          ...state,
          userSolution: state.userSolution.slice(0, -1) + "",
            isSubmitted: false,
        };
      };
      case Types.SetAnyKey: {
        return {
          ...state,
          userSolution:
              state.userSolution.slice(0, state.nbCols) +
              action.payload.toLowerCase(),
            isSubmitted: false,
        };
      };
      case Types.SetEnterKey: {
        const isUserSolutionInWordList = true;
        const isUserSolutionValidLen =
          state.userSolution.length >= 3;

        let isValidSolution = [
          isUserSolutionInWordList,
          isUserSolutionValidLen,
        ];

        let isValid = isValidSolution.every((v) => v);

        return {
          ...state,
          userSolution: isValid ? "" : state.userSolution,
          rowIndex: isValid ? state.rowIndex + 1 : state.rowIndex,
          round: [...state.round, state.userSolution],
          isSubmitted: true,
        };
      };
    default:
      throw new Error(`Unhandled  action type ${action.type}`);
  }
}
