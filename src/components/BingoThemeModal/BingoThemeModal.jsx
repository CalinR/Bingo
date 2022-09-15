import BingoThemeDisplay from '../BingoThemeDisplay/BingoThemeDisplay';
import './BingoThemeModal.css';

const patterns = [
    {
        label: 'No Pattern',
        pattern: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    },
    {
        label: 'Four Corners',
        pattern: [true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, true],
    },
    {
        label: 'Top Hat',
        pattern: [false, false, false, false, false, false, true, true, true, false, false, true, true, true, false, false, true, true, true, false, true, true, true, true, true],
    },
    {
        label: 'Letter L',
        pattern: [true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, true, true, true, true],
    },
    {
        label: 'Frame Inside',
        pattern: [false, false, false, false, false, false, true, true, true, false, false, true, false, true, false, false, true, true, true, false, false, false, false, false, false],
    },
    {
        label: 'Tree',
        pattern: [false, false, true, false, false, false, true, true, true, false, true, true, true, true, true, false, false, true, false, false, false, false, true, false, false],
    },
    {
        label: 'Letter T',
        pattern: [true, true, true, true, true, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false],
    },
    {
        label: 'Frame Outside',
        pattern: [true, true, true, true, true, true, false, false, false, true, true, false, false, false, true, true, false, false, false, true, true, true, true, true, true],
    },
    {
        label: 'Field Goal',
        pattern: [true, false, true, false, true, true, false, false, false, true, true, true, true, true, true, false, false, true, false, false, false, false, true, false, false],
    },
    {
        label: 'Letter X',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, true, false, true, false, true, false, false, false, true],
    },
    {
        label: 'Plus Sign',
        pattern: [false, false, true, false, false, false, false, true, false, false, true, true, true, true, true, false, false, true, false, false, false, false, true, false, false],
    },
    {
        label: 'Diamond',
        pattern: [false, false, true, false, false, false, true, false, true, false, true, false, false, false, true, false, true, false, true, false, false, false, true, false, false],
    },
    {
        label: 'Letter Y',
        pattern: [true, false, false, false, true, false, true, false, true, false, false, false, true, false, false, false, false, true, false, false, false, false, true, false, false],
    },
    {
        label: 'Lucky 7',
        pattern: [true, true, true, true, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false, false],
    },
    {
        label: 'Blackout',
        pattern: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    },
];

function BingoThemeModal({ dispatch, theme, show, onClose }) {
    if (!show) return null;

    const patternList = patterns.map((pattern) => <p key={pattern.label} onClick={() => dispatch({ type: 'CHANGE_THEME', payload: pattern.pattern })}>{pattern.label}</p>)

    return (
        <div className="bingo__theme__modal">
            <h1>Winning Patten</h1>
            <div className="theme__modal__container">
                <BingoThemeDisplay
                    dispatch={dispatch}
                    theme={theme}
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
