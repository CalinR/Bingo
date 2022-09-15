import './BingoTheme.css';
import { useState } from 'react';
import BingoThemeModal from '../BingoThemeModal/BingoThemeModal';
import BingoThemeDisplay from '../BingoThemeDisplay/BingoThemeDisplay';

function BingoTheme({ dispatch, theme, themeName }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bingo__theme">
            <BingoThemeDisplay
                theme={theme}
                themeName={themeName}
                onClick={() => setShowModal(true)}
            />
            <BingoThemeModal
                dispatch={dispatch}
                theme={theme}
                themeName={themeName}
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}

export default BingoTheme;
