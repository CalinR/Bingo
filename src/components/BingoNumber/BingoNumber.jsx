import './BingoNumber.css';
import { useCallback } from "react";

function BingoNumber({ number, dispatch, selectedBalls, displayOddEven }) {
    let selected = selectedBalls.indexOf(number) > -1;
    const oddOrEven = number % 2;
    const lastSelectedNumber = selectedBalls[selectedBalls.length - 1];
    const isLastSelected = number === lastSelectedNumber;

    if (displayOddEven === 'odd' && oddOrEven === 1) {
        selected = true;
    } else if (displayOddEven === 'even' && oddOrEven === 0) {
        selected = true;
    }

    const handleClick = useCallback(() => {
        if (!displayOddEven || (displayOddEven === 'odd' && oddOrEven === 0) || (displayOddEven === 'even' && oddOrEven === 1)) { 
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
        }
    }, [selected, dispatch, displayOddEven, oddOrEven]);

    return (
        <li className="bingo__number">
            <span className={`bingo__number__circle ${selected ? 'bingo__number__circle--selected' : ''} ${isLastSelected ? 'bingo__number__circle--last-selected' : ''}`} onClick={handleClick}>
                {number}
            </span>
        </li>
    );
}

export default BingoNumber;
