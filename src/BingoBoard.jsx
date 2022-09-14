import './BingoBoard.css';
import BingoRow from "./BingoRow";

function BingoBoard({ onBallSelected }) {
    return (
        <section className="bingo__board">
            <BingoRow rowName="B" rowNumber={0} onBallSelected={onBallSelected}/>
            <BingoRow rowName="I" rowNumber={1} onBallSelected={onBallSelected}/>
            <BingoRow rowName="N" rowNumber={2} onBallSelected={onBallSelected}/>
            <BingoRow rowName="G" rowNumber={3} onBallSelected={onBallSelected}/>
            <BingoRow rowName="O" rowNumber={4} onBallSelected={onBallSelected}/>
        </section>
    );
}

export default BingoBoard;
