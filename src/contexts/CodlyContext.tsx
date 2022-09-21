import { createContext, useContext, useMemo, useReducer, Dispatch, useCallback, } from 'react';

// import { wordList } from '../utility/wordList';
import { getCode } from '../services/codeServices';

import { initState } from './initState';
import { ActionType, reducer, StateType, Types } from '../reducers/reducersCodly';

interface CodlyContextData extends StateType {
  dispatchCodly: Dispatch<ActionType>,
  loadData: any,
};

interface Props {
  children: React.ReactNode;
}

const CodlyContext = createContext<CodlyContextData>({
    ...initState,
    dispatchCodly: ({ }) => { },
    loadData: () => { },
  } as unknown as CodlyContextData);

const CodlyProvider = ({children}: Props): JSX.Element => {
  const [state, dispatchCodly] = useReducer(reducer, initState);

  const loadData = useCallback(() => {
   //  dispatchCodly({ type: Types.SetInitialData, payload: wordList });
   // dispatchCodly({ type: Types.SetStatusResult, payload: 'loading' });
   getCode()
      .then((response: { data: any; }) => {
        dispatchCodly({ type: Types.SetInitialData, payload: response.data  });
      })
      .catch(() => {
        // dispatchCodly({ type: Types.SetStatusResult, payload: 'error' });
      });
  }, []);

  const providerValue = useMemo(() => ({
    ...state,
    dispatchCodly,
    loadData,
  }), [loadData, state]);

  return (
    <CodlyContext.Provider
      value={providerValue}
    >
      {children}
    </CodlyContext.Provider>
  );
}

export const useCodlyContext = (): CodlyContextData => useContext(CodlyContext);

export { CodlyProvider, CodlyContext };
