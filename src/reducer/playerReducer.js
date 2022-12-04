import generateRandomCard from "../utils/generateRandomCard";

const playerReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return {
                ...state,
                selectedBalls: [...new Set([...state.selectedBalls, action.payload])],
            }
        case 'REMOVE_NUMBER':
            return {
                ...state,
                selectedBalls: state.selectedBalls.filter((number) => number !== action.payload)
            }
        case 'CLEAR':
            return {
                cardNumbers: generateRandomCard(),
                selectedBalls: [0],
            }
        default:
            return state;
        }
}

export default playerReducer;