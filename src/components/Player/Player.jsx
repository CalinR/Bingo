import useReducerWithLocalStorage from '../../hooks/useReducerWithLocalStorage';
import { useCallback, useEffect, useRef, useState } from 'react';
import PlayerCardColumn from '../PlayerCardColumn/PlayerCardColumn';
import playerReducer from '../../reducer/playerReducer';
import generateRandomCard from '../../utils/generateRandomCard';

const initialState = {
  selectedBalls: [0],
  cardNumbers: generateRandomCard(),
}

const playerColors = ['purple', 'blue', 'green', 'red'];

function Player() {
  const [gameState, dispatch] = useReducerWithLocalStorage(playerReducer, initialState, 'BINGO_PLAYER_STATE');
  const [scale, setScale] = useState(1);
  const bingoRef = useRef();
  const [color, setColor] = useState(0);

  const onResize = useCallback(() => {
    const fixedWidth = 720;
    const fixedHeight = 975;
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

  const changeColor = useCallback(() => {
    if (color < 3) {
      setColor(color + 1);
    } else {
      setColor(0);
    }
  }, [color]);

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

  const handleReset = () => {
    if (window.confirm('Are you sure you want to clear the board and generate new numbers?')) {
      dispatch({ type: 'CLEAR' });
    }
  }

  const styles = {
    'transform': `scale(${scale})`,
  }

  return (
    <div className="app">
      <div className={`bingo bingo--${playerColors[color]}`} ref={bingoRef} style={styles}>
        <div className="player-actions">
          <button className="player-actions__btn" onClick={handleReset}>Reset</button>
          <button className="player-actions__btn player-actions__btn--color" onClick={changeColor}>Change Color</button>
        </div>
        <div className="player-card">
            <PlayerCardColumn
                column="B"
                dispatch={dispatch}
                selectedBalls={gameState.selectedBalls}
                cardNumbers={gameState.cardNumbers['B']}
            />
            <PlayerCardColumn
                column="I"
                dispatch={dispatch}
                selectedBalls={gameState.selectedBalls}
                cardNumbers={gameState.cardNumbers['I']}
            />
            <PlayerCardColumn
                column="N"
                dispatch={dispatch}
                selectedBalls={gameState.selectedBalls}
                cardNumbers={gameState.cardNumbers['N']}
            />
            <PlayerCardColumn
                column="G"
                dispatch={dispatch}
                selectedBalls={gameState.selectedBalls}
                cardNumbers={gameState.cardNumbers['G']}
            />
            <PlayerCardColumn
                column="O"
                dispatch={dispatch}
                selectedBalls={gameState.selectedBalls}
                cardNumbers={gameState.cardNumbers['O']}
            />
        </div>
      </div>
    </div>
  )
}

export default Player;
