import { useReducer } from 'react';

const useReducerWithLocalStorage = (reducer, initialState, localStorageKey = 'BINGO_STATE') => {
    const localStorageState = window.localStorage.getItem(localStorageKey);
    const [state, dispatch] = useReducer(reducer, localStorageState ? JSON.parse(localStorageState) : initialState);
  
    window.localStorage.setItem(localStorageKey, JSON.stringify(state));
  
    return [state, dispatch];
}

export default useReducerWithLocalStorage;
