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
                themeName: '',
            }
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.payload.pattern,
                themeName: action.payload.label,
            }
        case 'CLEAR':
            return {
                currentBall: null,
                selectedBalls: [],
                theme: new Array(25).fill(false),
                themeName: 'No Pattern',
                showCountdown: false,
            }
        case 'SHOW_COUNTDOWN':
            return {
                ...state,
                showCountdown: action.payload,
            }
        case 'TOGGLE_ODD_EVEN':
            console.log(action);

            return {
                ...state,
                displayOddEven: action.payload,
            }
        default:
            return state;
        }
}

export default reducer;