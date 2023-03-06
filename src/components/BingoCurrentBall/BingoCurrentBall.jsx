import { useCallback, useEffect, useRef } from 'react';
import './BingoCurrentBall.css';

function BingoCurrentBall({ currentBall, dispatch, selectedBalls }) {
    const videoRef = useRef();

    useEffect(() => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch(() => {
                console.log("Something went wrong!");
            });
        }
    }, [videoRef.current]);

    return (
        <div className="bingo__current_ball_container">
            <video className="bingo__current_ball" autoPlay ref={videoRef}></video>
        </div>
    );
    // const allNumbers = [...Array(76).keys()].slice(1);

    // const handleClick = useCallback(() => {
    //     const remainingNumbers = allNumbers.filter(n => !selectedBalls.includes(n));
    //     if (remainingNumbers.length) {
    //         const number = Math.floor(Math.random() * remainingNumbers.length);
    //         console.log(number, remainingNumbers);

    //         dispatch({
    //             type: 'ADD_NUMBER',
    //             payload: remainingNumbers[number],
    //         });
    //     }
    // }, [selectedBalls]);

    // if (currentBall !== null) {
    //     const rows = ['B', 'I', 'N', 'G', 'O'];
    //     const rowNumber = Math.floor((currentBall - 1) / 15);
    //     const ballRow = rows[rowNumber];

    //     return (
    //         <video className="bingo__current_ball">
    //         </video>
    //     );
    // } else {
    //     return (
    //         <video className="bingo__current_ball" onClick={handleClick}></div>
    //     );
    // }
}

export default BingoCurrentBall;
