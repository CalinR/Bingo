import BingoNumber from "../BingoNumber/BingoNumber";
import './BonanzaRow.css';

function BonanzaRow({rowNumber, dispatch, selectedBalls, displayOddEven }) {
    const rows = ['B', 'I', 'N', 'G', 'O']
    const startingOffset = (15 * rowNumber) + 1;
    const rowName = rows[rowNumber];
    const numberElements = Array.from(Array(15)).map((value, index) => <BingoNumber key={index} number={index + startingOffset} dispatch={dispatch} selectedBalls={selectedBalls} displayOddEven={displayOddEven}/>)

    return (
        <div className={`bonanza__row bonanza__row__${rowNumber}`}>
            <div className="bonanza__header">{rowName}</div>
            <ul className="bonanza_numbers">
                {numberElements}
            </ul>
        </div>
    );
}

export default BonanzaRow;
