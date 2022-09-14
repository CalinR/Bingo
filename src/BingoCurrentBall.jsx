import './BingoCurrentBall.css';

function BingoCurrentBall({ currentBall }) {
    if (currentBall !== null) {
        const ballRow = currentBall.split(':')[0];
        const ballNumber = currentBall.split(':')[1];

        return (
            <div className="bingo__current_ball">
                <div className="current_ball__row">{ballRow}</div>
                <div className="current_ball__number">{ballNumber}</div>
            </div>
        );
    } else {
        return null;
    }
}

export default BingoCurrentBall;
