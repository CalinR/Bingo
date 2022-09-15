import './BingoTheme.css';
import { useState } from 'react';
import BingoThemeModal from '../BingoThemeModal/BingoThemeModal';
import BingoThemeDisplay from '../BingoThemeDisplay/BingoThemeDisplay';

function BingoTheme({ dispatch, theme }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bingo__theme">
            <BingoThemeDisplay
                theme={theme}
                onClick={() => setShowModal(true)}
            />
            <BingoThemeModal
                dispatch={dispatch}
                theme={theme}
                show={showModal}
                onClose={() => {
                    setShowModal(false);
                    console.log('close');
                }}
            />
        </div>
    );
}

export default BingoTheme;
