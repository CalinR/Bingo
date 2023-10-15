import { useCallback, useEffect, useRef, useState } from "react";
import useReducerWithLocalStorage from "../../hooks/useReducerWithLocalStorage";
import bonanzaReducer from "../../reducer/bonanzaReducer";
import BonanzaRow from "../BonanzaRow/BonanzaRow";
import './Bonanza.css';

const initialState = {
  selectedBalls: [0],
}

function Bonanza() {
  const [gameState, dispatch] = useReducerWithLocalStorage(bonanzaReducer, initialState, 'BINGO_BONANZA_STATE');
  const [scale, setScale] = useState(1);
  const bingoRef = useRef();

  const handleClear = useCallback(() => {
    if (window.confirm('Are you sure you want to clear the board?')) {
        dispatch({ type: 'CLEAR' });
    }
}, [dispatch]);

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

  const count = gameState.selectedBalls.length;

  return (
    <div className="app">
      <div className="bingo" ref={bingoRef} style={styles}>
        <h1 className="bonanza__heading">Bonanza!</h1>
        <div className="bonanza__ball-count">{count} numbers selected</div>
        <div className="bonanza__clear" onClick={handleClear}>Reset</div>
        <section className="bonanza__board">
          <BonanzaRow rowNumber={0} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
          <BonanzaRow rowNumber={1} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
          <BonanzaRow rowNumber={2} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
          <BonanzaRow rowNumber={3} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
          <BonanzaRow rowNumber={4} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
        </section>
      </div>
    </div>
  )
}

export default Bonanza;
