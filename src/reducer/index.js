const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NUMBER':
            return {
                ...state,
                currentBall: action.payload,
                selectedBalls: [...new Set([...state.selectedBalls, action.payload])],
            }
        case 'REMOVE_NUMBER':
            return {
                ...state,
                currentBall: null,
                selectedBalls: state.selectedBalls.filter((number) => number !== action.payload)
            }
        case 'SELECT_THEME_SQUARE':
            return {
                ...state,
                theme: state.theme.map((item, index) => index === action.payload ? !item : item),
            }
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload,
            }
        case 'CLEAR':
            return {
                currentBall: null,
                selectedBalls: [],
                theme: new Array(25).fill(false),
            }
        default:
            return state;
        }
}

export default reducer;