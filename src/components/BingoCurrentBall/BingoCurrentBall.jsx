import { useCallback } from 'react';
import './BingoCurrentBall.css';

function BingoCurrentBall({ currentBall, dispatch, selectedBalls }) {
    const allNumbers = [...Array(76).keys()].slice(1);

    const handleClick = useCallback(() => {
        const remainingNumbers = allNumbers.filter(n => !selectedBalls.includes(n));
        if (remainingNumbers.length) {
            const number = Math.floor(Math.random() * remainingNumbers.length);
            console.log(number, remainingNumbers);

            dispatch({
                type: 'ADD_NUMBER',
                payload: remainingNumbers[number],
            });
        }
    }, [selectedBalls]);

    if (currentBall !== null) {
        const rows = ['B', 'I', 'N', 'G', 'O'];
        const rowNumber = Math.floor((currentBall - 1) / 15);
        const ballRow = rows[rowNumber];

        return (
            <div className="bingo__current_ball" onClick={handleClick}>
                <div className="current_ball__row">{ballRow}</div>
                <div className="current_ball__number">{currentBall}</div>
            </div>
        );
    } else {
        return (
            <div className="bingo__current_ball bingo__current_ball--disabled" onClick={handleClick}></div>
        );
    }
}

export default BingoCurrentBall;
