import './BingoRow.css';
import BingoNumber from "./BingoNumber";

function BingoRow({rowName, rowNumber, onBallSelected }) {
    const startingOffset = (15 * rowNumber) + 1;
    const numberElements = Array.from(Array(15)).map((value, index) => <BingoNumber key={index} rowName={rowName} number={index + startingOffset} onBallSelected={onBallSelected} />)

    return (
        <div className="bingo__row">
            <div className="bingo__header">{rowName}</div>
            <ul className="bingo_numbers">
                {numberElements}
            </ul>
        </div>
    );
}

export default BingoRow;
