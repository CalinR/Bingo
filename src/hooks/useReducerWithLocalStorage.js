import { useReducer } from 'react';

const useReducerWithLocalStorage = (reducer, initialState, localStorageKey = 'BINGO_STATE') => {
    let localStorageState = window.localStorage.getItem(localStorageKey);
    // initialState structure has changed and does not match what is stored in localStorage

    console.log(Object.keys(JSON.parse(localStorageState)), Object.keys(initialState));
    if (Object.keys(JSON.parse(localStorageState)) !== Object.keys(initialState)) {
        localStorageState = null;
    }

    const [state, dispatch] = useReducer(reducer, localStorageState ? JSON.parse(localStorageState) : initialState);
  
    window.localStorage.setItem(localStorageKey, JSON.stringify(state));
  
    return [state, dispatch];
}

export default useReducerWithLocalStorage;
