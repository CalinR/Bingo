import './BingoNumber.css';
import { useCallback, useState } from "react";

function BingoNumber({ rowName, number, onBallSelected }) {
    const [selected, setSelected] = useState(false);

    const handleClick = useCallback(() => {
        setSelected((prevState) => !prevState);
        if (!selected) {
            onBallSelected(`${rowName}:${number}`);
        } else {
            onBallSelected(null);
        }
    }, [selected, rowName, number]);

    return (
        <li className="bingo__number">
            <span className={`bingo__number__circle ${selected ? 'bingo__number__circle--selected' : ''}`} onClick={handleClick}>
                {number}
            </span>
        </li>
    );
}

export default BingoNumber;
