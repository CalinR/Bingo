import { useReducer } from 'react';

const useReducerWithLocalStorage = (reducer, initialState, localStorageKey = 'BINGO_STATE') => {
    let localStorageState = window.localStorage.getItem(localStorageKey);
    // initialState structure has changed and does not match what is stored in localStorage

    if (localStorageState && Object.keys(JSON.parse(localStorageState)).toString() !== Object.keys(initialState).toString()) {
        localStorageState = null;
    }

    const [state, dispatch] = useReducer(reducer, localStorageState ? JSON.parse(localStorageState) : initialState);
  
    window.localStorage.setItem(localStorageKey, JSON.stringify(state));
  
    return [state, dispatch];
}

export default useReducerWithLocalStorage;
