import './BingoNumber.css';
import { useCallback } from "react";

function BingoNumber({ number, dispatch, selectedBalls, displayOddEven }) {
    let selected = selectedBalls.indexOf(number) > -1;
    const oddOrEven = number % 2;

    if (displayOddEven === 'odd' && oddOrEven === 1) {
        selected = true;
    } else if (displayOddEven === 'even' && oddOrEven === 0) {
        selected = true;
    }

    const handleClick = useCallback(() => {
        if ((displayOddEven === 'odd' && oddOrEven === 0) || (displayOddEven === 'even' && oddOrEven === 1)) { 
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
            <span className={`bingo__number__circle ${selected ? 'bingo__number__circle--selected' : ''}`} onClick={handleClick}>
                {number}
            </span>
        </li>
    );
}

export default BingoNumber;
