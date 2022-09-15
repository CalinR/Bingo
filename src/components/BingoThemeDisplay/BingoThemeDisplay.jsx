import './BingoThemeDisplay.css';
import BingoThemeSquare from "../BingoThemeSquare/BingoThemeSquare";

function BingoThemeDisplay({ dispatch, theme, themeName, onClick }) {
    const handleClick = (number) => {
        if (dispatch) {
            dispatch({
                type: 'SELECT_THEME_SQUARE',
                payload: number,
            });
        }
    }

    const themeSquares = Array.from(Array(25)).map((value, index) => (
        <BingoThemeSquare
            key={index}
            selected={theme[index] === true}
            onClick={() => handleClick(index)}
        />
    ));

    return (
        <div className="bingo__theme__display__wrapper">
            <h3 className="bingo__theme__name">{themeName}</h3>
            <div className="bingo__theme__display" onClick={onClick}>
                <div className="theme__display__header">
                    <BingoThemeSquare label="B"/>
                    <BingoThemeSquare label="I"/>
                    <BingoThemeSquare label="N"/>
                    <BingoThemeSquare label="G"/>
                    <BingoThemeSquare label="O"/>
                </div>
                <div className="theme__display__squares">
                    { themeSquares }
                </div>
            </div>
        </div>
    );
}

export default BingoThemeDisplay;
