import './BingoThemeSquare.css';

function BingoThemeSquare({ label, onClick, selected }) {
    return (
        <div
            className={`bingo__theme__square ${selected ? 'bingo__theme__square--selected' : ''}`}
            onClick={onClick}
            selected={selected}
        >
            {label}
        </div>
    );
}

export default BingoThemeSquare;
