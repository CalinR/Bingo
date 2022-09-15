import patterns from '../../utils/patterns';
import BingoThemeDisplay from '../BingoThemeDisplay/BingoThemeDisplay';
import './BingoThemeModal.css';

function BingoThemeModal({ dispatch, theme, themeName, show, onClose }) {
    if (!show) return null;

    const patternList = patterns.map((pattern) => <p key={pattern.label} onClick={() => dispatch({ type: 'CHANGE_THEME', payload: { pattern: pattern.pattern, label: pattern.label } })}>{pattern.label}</p>)

    return (
        <div className="bingo__theme__modal">
            <h1>Winning Patten</h1>
            <div className="theme__modal__container">
                <BingoThemeDisplay
                    dispatch={dispatch}
                    theme={theme}
                    themeName={themeName}
                    key="theme-display-modal"
                />
                <div className="theme__modal__patterns">
                    {patternList}
                </div>
            </div>
            <button onClick={onClose}>Go Back</button>
        </div>
    );
}

export default BingoThemeModal;
