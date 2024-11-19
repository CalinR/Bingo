import './BingoLastBall.css';

function BingoLastBall({ currentBall, dispatch, selectedBalls }) {
    const selectedBall = selectedBalls[selectedBalls.length - 1];
    const columns = ['B', 'I', 'N', 'G', 'O'];
    const currentColumn = columns[Math.ceil(selectedBall / 15)-1];

    return (
        <div className="bingo__last_ball_container">
            <div className="bingo__last_ball_inner">
                <div className="bingo__last_ball">
                    <div className="bingo__last_ball_number">
                        <span className="bingo__last_ball_column">{currentColumn}</span>
                        { selectedBall }
                    </div>
                </div>
            </div>
            <p className="bingo__last_ball_text">Last Ball</p>
        </div>
    );
}

export default BingoLastBall;
