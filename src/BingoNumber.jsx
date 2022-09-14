import './BingoNumber.css';
import { useCallback } from "react";

function BingoNumber({ number, dispatch, selectedBalls }) {
    const selected = selectedBalls.indexOf(number) > -1;

    const handleClick = useCallback(() => {
        if (selected) {
            dispatch({
                type: 'REMOVE_NUMBER',
                payload: number,
            });
        } else {
            dispatch({
                type: 'ADD_NUMBER',
                payload: number,
            });
        }
    }, [selected, dispatch]);

    return (
        <li className="bingo__number">
            <span className={`bingo__number__circle ${selected ? 'bingo__number__circle--selected' : ''}`} onClick={handleClick}>
                {number}
            </span>
        </li>
    );
}

export default BingoNumber;
