import './App.css';
import BingoBoard from '../BingoBoard/BingoBoard';
import BingoSidebar from '../BingoSidebar/BingoSidebar';
import useReducerWithLocalStorage from '../../hooks/useReducerWithLocalStorage';
import reducer from '../../reducer';
import { useCallback, useEffect, useRef, useState } from 'react';

const initialState = {
  currentBall: null,
  selectedBalls: [],
  theme: new Array(25).fill(false),
  themeName: 'No Pattern',
  showCountdown: false,
  displayOddEven: null,
}

function App() {
  const [gameState, dispatch] = useReducerWithLocalStorage(reducer, initialState);
  const [scale, setScale] = useState(1);
  const bingoRef = useRef();

  const onResize = useCallback(() => {
    const fixedWidth = 1280;
    const fixedHeight = 720;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const bingoWidth = bingoRef.current.offsetWidth;
    const bingoHeight = bingoRef.current.offsetHeight;
    const bingoAspectRatio = bingoHeight / bingoWidth;
    const windowAspectRatio = windowHeight / windowWidth; 

    if (windowAspectRatio < bingoAspectRatio) {
      setScale(windowHeight / fixedHeight);
    } else {
      setScale(windowWidth / fixedWidth);
    }
  }, [bingoRef.current]);

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    window.onbeforeunload = (e) => {
      return 'Do you want to exit this page?';
    };

    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [bingoRef.current]);

  const styles = {
    'transform': `scale(${scale})`,
  }

  console.log(gameState.selectedBalls);

  return (
    <div className="app">
      <div className="bingo" ref={bingoRef} style={styles}>
        <BingoSidebar
          dispatch={dispatch}
          currentBall={gameState.currentBall}
          theme={gameState.theme}
          themeName={gameState.themeName}
          showCountdown={gameState.showCountdown}
          displayOddEven={gameState.displayOddEven}
          selectedBalls={gameState.selectedBalls}
        />
        <BingoBoard
          dispatch={dispatch}
          selectedBalls={gameState.selectedBalls}
          displayOddEven={gameState.displayOddEven}
        />
      </div>
    </div>
  )
}

export default App;
