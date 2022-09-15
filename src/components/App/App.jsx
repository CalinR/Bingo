import './App.css';
import BingoBoard from '../BingoBoard/BingoBoard';
import BingoSidebar from '../BingoSidebar/BingoSidebar';
import useReducerWithLocalStorage from '../../hooks/useReducerWithLocalStorage';
import reducer from '../../reducer';

const initialState = {
  currentBall: null,
  selectedBalls: [],
  theme: new Array(25).fill(false),
  themeName: 'No Pattern',
}

function App() {
  const [gameState, dispatch] = useReducerWithLocalStorage(reducer, initialState);

  return (
    <div className="app">
      <div className="bingo">
        <BingoSidebar
          dispatch={dispatch}
          currentBall={gameState.currentBall}
          theme={gameState.theme}
          themeName={gameState.themeName}
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
