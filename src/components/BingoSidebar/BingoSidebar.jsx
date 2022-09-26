import BingoCurrentBall from '../BingoCurrentBall/BingoCurrentBall';
import BingoTheme from '../BingoTheme/BingoTheme';
import './BingoSidebar.css';

function BingoSidebar({ dispatch, currentBall, theme, themeName }) {
    return (
        <section className="bingo__sidebar">
            <button onClick={() => dispatch({type: 'CLEAR'})}>New Game</button>
            <BingoTheme dispatch={dispatch} theme={theme} themeName={themeName} />
            <BingoCurrentBall currentBall={currentBall}/>
        </section>
    );
}

export default BingoSidebar;
