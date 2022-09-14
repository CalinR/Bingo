import './BingoRow.css';
import BingoNumber from "./BingoNumber";

function BingoRow({rowNumber, dispatch, selectedBalls }) {
    const rows = ['B', 'I', 'N', 'G', 'O']
    const startingOffset = (15 * rowNumber) + 1;
    const rowName = rows[rowNumber];
    const numberElements = Array.from(Array(15)).map((value, index) => <BingoNumber key={index} number={index + startingOffset} dispatch={dispatch} selectedBalls={selectedBalls}/>)

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
