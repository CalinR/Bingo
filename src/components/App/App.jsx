import './App.css';
import BingoBoard from '../BingoBoard/BingoBoard';
import BingoSidebar from '../BingoSidebar/BingoSidebar';
import useReducerWithLocalStorage from '../../hooks/useReducerWithLocalStorage';
import reducer from '../../reducer';

const initialState = {
  currentBall: null,
  selectedBalls: [],
  theme: new Array(25).fill(false),
}

function App() {
  const [gameState, dispatch] = useReducerWithLocalStorage(reducer, initialState);

  console.log(gameState);

  return (
    <div className="app">
      <div className="bingo">
        <BingoSidebar
          dispatch={dispatch}
          currentBall={gameState.currentBall}
          theme={gameState.theme}
        />
        <BingoBoard
          dispatch={dispatch}
          selectedBalls={gameState.selectedBalls}
        />
      </div>
    </div>
  )
}

export default App;
