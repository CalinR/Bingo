import BingoCurrentBall from '../BingoCurrentBall/BingoCurrentBall';
import BingoTheme from '../BingoTheme/BingoTheme';
import './BingoSidebar.css';

function BingoSidebar({ dispatch, currentBall, theme }) {
    return (
        <section className="bingo__sidebar">
            <p>Bingo Sidebar</p>
            <button onClick={() => dispatch({type: 'CLEAR'})}>New Game</button>
            <BingoTheme dispatch={dispatch} theme={theme} />
            <BingoCurrentBall currentBall={currentBall}/>
        </section>
    );
}

export default BingoSidebar;
