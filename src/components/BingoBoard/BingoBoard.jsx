import './BingoBoard.css';
import BingoRow from "../BingoRow/BingoRow";

function BingoBoard({ dispatch, selectedBalls, displayOddEven }) {
    return (
        <section className="bingo__board">
            <BingoRow rowNumber={0} dispatch={dispatch} selectedBalls={selectedBalls} displayOddEven={displayOddEven}/>
            <BingoRow rowNumber={1} dispatch={dispatch} selectedBalls={selectedBalls} displayOddEven={displayOddEven}/>
            <BingoRow rowNumber={2} dispatch={dispatch} selectedBalls={selectedBalls} displayOddEven={displayOddEven}/>
            <BingoRow rowNumber={3} dispatch={dispatch} selectedBalls={selectedBalls} displayOddEven={displayOddEven}/>
            <BingoRow rowNumber={4} dispatch={dispatch} selectedBalls={selectedBalls} displayOddEven={displayOddEven}/>
        </section>
    );
}

export default BingoBoard;
