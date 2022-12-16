import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  Dispatch,
  useCallback,
} from "react";

import { initState } from "./initState";
import {
  ActionType,
  reducer,
  StateType,
  Types,
} from "../reducers/reducersCodly";

import names from "../const/names";
import configInitialsPositions from "../const/";

interface ConnectioContextData extends StateType {
  dispatch: Dispatch<ActionType>;
  gameOver: any;
  play: any;
  toogleAlert: any;
  updateConfigPositions: any;
}

interface Props {
  children: React.ReactNode;
}

const ConnectioContext = createContext<ConnectioContextData>({
  ...initState,
  dispatch: ({}) => {},
  gameOver: () => {},
  play: () => {},
  toogleAlert: () => {},
  updateConfigPositions: () => {},
} as unknown as ConnectioContextData);

const ConnectioProvider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initState);

  const updateConfigPositions = useCallback(
    ({
      pos,
      col,
      row,
      status,
      rotation,
    }: {
      pos: number;
      col: number;
      row: number;
      status: boolean;
      rotation: number;
    }) => {
      let newStatus = status;
      if (rotation !== 0 && rotation % 360 === 0) {
        newStatus = !status;
      }
      const name = (names as any)[pos];

      if (name === "vertical" || name === "horizontal") {
        if (rotation % 180 !== 0) {
          newStatus = false;
        }
        if (rotation % 180 === 0) {
          newStatus = true;
        }
      }

      const updateConfigPositions = state.configPositions?.map(
        (rowItem: { pos: number }[], index: { toString: () => string }) =>
          rowItem.map(
            (
              item1: { pos: number },
              indexRowItem: { toString: () => string }
            ) =>
              item1.pos === pos &&
              index.toString() === row.toString() &&
              col.toString() === indexRowItem.toString()
                ? { ...item1, status: newStatus }
                : item1
          )
      );

      dispatch({
        type: Types.SetUpdateConfigPositions,
        payload: updateConfigPositions,
      });
    },
    [state.configPositions]
  );

  const play = useCallback(() => {
    const newLevel = state.level + 1;
    const configPositions = (configInitialsPositions as any)[newLevel];
    dispatch({
      type: Types.SetPlay,
      payload: {
        configPositions,
        level: newLevel,
      },
    });
  }, [state.level]);

  const gameOver = useCallback(() => {
    dispatch({ type: Types.SetGameOver });
  }, []);

  const toogleAlert = useCallback(() => {
    dispatch({ type: Types.SetIsOpen });
  }, []);

  const providerValue = useMemo(
    () => ({
      ...state,
      dispatch,
      gameOver,
      play,
      toogleAlert,
      updateConfigPositions,
    }),
    [dispatch, gameOver, toogleAlert, play, state, updateConfigPositions]
  );

  return (
    <ConnectioContext.Provider value={providerValue}>
      {children}
    </ConnectioContext.Provider>
  );
};

export const useConnectioContext = (): ConnectioContextData =>
  useContext(ConnectioContext);

export { ConnectioProvider, ConnectioContext };
