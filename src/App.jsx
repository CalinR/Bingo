import './App.css';
import { useReducer } from 'react';
import BingoBoard from './BingoBoard';
import BingoSidebar from './BingoSidebar';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_NUMBER':
      return {
        currentBall: action.payload,
        selectedBalls: [...new Set([...state.selectedBalls, action.payload])],
      }
    case 'REMOVE_NUMBER':
      return {
        currentBall: null,
        selectedBalls: state.selectedBalls.filter((number) => number !== action.payload)
      }
    case 'CLEAR':
      return {
        currentBall: null,
        selectedBalls: [],
      }
    default:
      return state;
  }
}

const useReducerWithMiddleware = (reducer, initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  middleware(state);

  return [state, dispatch];
}

const localStorageMiddleware = (state) => {
  window.localStorage.setItem('BINGO_STATE', JSON.stringify(state));
}

const initialState = (() => {
  const localStorageState = window.localStorage.getItem('BINGO_STATE');

  if(localStorageState) {
    return JSON.parse(localStorageState);
  }

  return {
    currentBall: null,
    selectedBalls: [],
  }
})();

function App() {
  const [gameState, dispatch] = useReducerWithMiddleware(reducer, initialState, localStorageMiddleware);

  return (
    <div className="app">
      <div className="bingo">
        <BingoSidebar onNewGame={() => dispatch({type: 'CLEAR'})} currentBall={gameState.currentBall}/>
        <BingoBoard dispatch={dispatch} selectedBalls={gameState.selectedBalls}/>
      </div>
    </div>
  )
}

export default App;
