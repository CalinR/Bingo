import './BingoCurrentBall.css';

function BingoCurrentBall({ currentBall }) {
    if (currentBall !== null) {
        const rows = ['B', 'I', 'N', 'G', 'O'];
        const rowNumber = Math.floor((currentBall - 1) / 15);
        const ballRow = rows[rowNumber];

        return (
            <div className="bingo__current_ball">
                <div className="current_ball__row">{ballRow}</div>
                <div className="current_ball__number">{currentBall}</div>
            </div>
        );
    } else {
        return null;
    }
}

export default BingoCurrentBall;
