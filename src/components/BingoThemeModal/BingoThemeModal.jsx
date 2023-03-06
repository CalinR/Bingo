import { useCallback } from 'react';
import patterns from '../../utils/patterns';
import BingoThemeDisplay from '../BingoThemeDisplay/BingoThemeDisplay';
import CloseIcon from '../Icons/CloseIcon';
import './BingoThemeModal.css';

function BingoThemeModal({ dispatch, theme, themeName, showCountdown, displayOddEven, show, onClose }) {
    if (!show) return null;

    const patternList = patterns.map((pattern) => <p key={pattern.label} onClick={() => dispatch({ type: 'CHANGE_THEME', payload: { pattern: pattern.pattern, label: pattern.label } })}>{pattern.label}</p>)

    return (
        <div className="bingo__theme__modal">
            <h1>Winning Patten</h1>
            <button onClick={onClose} className="modal__close">
                <CloseIcon />
            </button>
            <div className="theme__modal__container">
                <div className="theme__modal__sidebar">
                    <BingoThemeDisplay
                        dispatch={dispatch}
                        theme={theme}
                        themeName={themeName}
                        key="theme-display-modal"
                    />
                    <div className="theme__modal__countdown">
                        <button onClick={() => dispatch({ type: 'SHOW_COUNTDOWN', payload: !showCountdown })}>
                            {
                                showCountdown ? 'Hide Countdown' : 'Show Countdown'
                            }
                        </button>
                        <button onClick={() => dispatch({ type: 'TOGGLE_ODD_EVEN', payload: displayOddEven === 'odd' ? 'even' : (displayOddEven === 'even' ? null : 'odd') })}>
                            {
                                displayOddEven === 'odd' ? 'Showing Odd' : (displayOddEven === 'even' ? 'Showing Even' : 'Showing Neither Odd/Even')
                            }
                        </button>
                    </div>
                </div>
                <div className="theme__modal__patterns">
                    {patternList}
                </div>
            </div>
        </div>
    );
}

export default BingoThemeModal;
