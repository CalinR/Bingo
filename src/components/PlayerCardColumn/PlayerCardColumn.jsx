import { useCallback } from "react";

export default function PlayerCardColumn({ column, dispatch, selectedBalls, cardNumbers }) {
    const handleClick = useCallback((number) => {
        if (selectedBalls.indexOf(number)>-1) {
            dispatch({ type: 'REMOVE_NUMBER', payload: number });
        } else {
            dispatch({ type: 'ADD_NUMBER', payload: number });
        }
    }, [selectedBalls]);

    const rows = cardNumbers?.map((number, index) => {
        const selected = selectedBalls.indexOf(number) > -1;

        if (number === 0) return <li className={`column__cell column__cell--free ${selected ? 'column__cell--selected': ''}`} key={`${index}-${number}`}>Free</li>;

        return (
            <li
                className={`column__cell ${selected ? 'column__cell--selected': ''}`}
                key={`${index}-${number}`}
                onClick={() => handleClick(number)}
            >
                {number}
            </li>
        );
    });

    return (
        <ul className="player-card__column">
            <li className="column__cell column__cell--header">{column}</li>
            {rows}
        </ul>
    );
}
