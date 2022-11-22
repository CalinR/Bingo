import { useCallback } from 'react';
import BingoBallCount from '../BingoBallCount/BingoBallCount';
import BingoCurrentBall from '../BingoCurrentBall/BingoCurrentBall';
import BingoTheme from '../BingoTheme/BingoTheme';
import ResetIcon from '../Icons/ResetIcon';
import './BingoSidebar.css';

function BingoSidebar({ dispatch, currentBall, theme, themeName, showCountdown, selectedBalls }) {
    const handleClear = useCallback(() => {
        if (window.confirm('Are you sure you want to clear the board?')) {
            dispatch({ type: 'CLEAR' });
        }
    }, [dispatch]);

    return (
        <section className="bingo__sidebar">
            <button onClick={handleClear} className="new_game">
                <ResetIcon />
            </button>
            <BingoTheme dispatch={dispatch} theme={theme} themeName={themeName} showCountdown={showCountdown} />
            <BingoBallCount ballCount={selectedBalls.length} showCountdown={showCountdown} />
            <BingoCurrentBall currentBall={currentBall}/>
        </section>
    );
}

export default BingoSidebar;
