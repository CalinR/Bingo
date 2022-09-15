import './BingoBoard.css';
import BingoRow from "../BingoRow/BingoRow";

function BingoBoard({ dispatch, selectedBalls }) {
    return (
        <section className="bingo__board">
            <BingoRow rowNumber={0} dispatch={dispatch} selectedBalls={selectedBalls}/>
            <BingoRow rowNumber={1} dispatch={dispatch} selectedBalls={selectedBalls}/>
            <BingoRow rowNumber={2} dispatch={dispatch} selectedBalls={selectedBalls}/>
            <BingoRow rowNumber={3} dispatch={dispatch} selectedBalls={selectedBalls}/>
            <BingoRow rowNumber={4} dispatch={dispatch} selectedBalls={selectedBalls}/>
        </section>
    );
}

export default BingoBoard;
