import BingoCurrentBall from './BingoCurrentBall';
import './BingoSidebar.css';

function BingoSidebar({ onNewGame, currentBall }) {
    return (
        <section className="bingo__sidebar">
            <p>Bingo Sidebar</p>
            <button onClick={onNewGame}>New Game</button>
            <BingoCurrentBall currentBall={currentBall}/>
        </section>
    );
}

export default BingoSidebar;
