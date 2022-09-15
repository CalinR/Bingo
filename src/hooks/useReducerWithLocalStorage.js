import { useReducer } from 'react';

const useReducerWithLocalStorage = (reducer, initialState) => {
    const localStorageState = window.localStorage.getItem('BINGO_STATE');
    const [state, dispatch] = useReducer(reducer, localStorageState ? JSON.parse(localStorageState) : initialState);
  
    window.localStorage.setItem('BINGO_STATE', JSON.stringify(state));
  
    return [state, dispatch];
}

export default useReducerWithLocalStorage;
