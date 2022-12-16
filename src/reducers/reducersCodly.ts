
export enum Types {
  SetGameOver = "SetGameOver",
  SetUpdateConfigPositions = "SetUpdateConfigPositions",
  SetIsOpen = "SetIsOpen",
  SetPlay = "SetPlay",
}

export type Item = {
  pos: number;
  status: boolean;
  rotation: number;
}

export type Positions = Item[];

export type StateType = {
  level: number,
  isOpen: boolean,
  isGameOver: boolean,
  configPositions: Positions[],
};

export type ActionType = {
  type: Types;
  payload?: any;
};

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case Types.SetGameOver:
      return {
        ...state,
        isGameOver: !state.isGameOver,
      };
    case Types.SetIsOpen:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case Types.SetPlay:
      return {
        ...state,
        isOpen: !state.isOpen,
        configPositions: action.payload.configPositions,
        level: action.payload.level,
      };
      case Types.SetUpdateConfigPositions: {
        return {
          ...state,
          configPositions: action.payload,
        };
      };
    default:
      throw new Error(`Unhandled  action type ${action.type}`);
  }
}
