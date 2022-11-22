import './BingoBallCount.css';

function BingoBallCount({ ballCount, showCountdown }) {
    console.log({ showCountdown, ballCount });
    if (!showCountdown) return null;

    return (
        <h3 className="ball_countdown">
            { ballCount } numbers called
        </h3>
    );
}

export default BingoBallCount;
