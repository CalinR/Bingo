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
        case 'CHANGE_THEME': {
            let newSelectedBalls = state.selectedBalls;

            if (action.payload.label === 'Special: Bonanza') {
                newSelectedBalls = JSON.parse(localStorage.getItem('BINGO_BONANZA_STATE')).selectedBalls;
            }

            return {
                ...state,
                selectedBalls: newSelectedBalls,
                theme: action.payload.pattern,
                themeName: action.payload.label,
            }
        }
        case 'CLEAR': {
            let newSelectedBalls = [];

            if (state.themeName === 'Special: Bonanza') {
                newSelectedBalls = JSON.parse(localStorage.getItem('BINGO_BONANZA_STATE')).selectedBalls;
            }

            return {
                currentBall: null,
                selectedBalls: newSelectedBalls,
                theme: state.theme,
                themeName: state.themeName,
                showCountdown: false,
            }
        }
        case 'SHOW_COUNTDOWN':
            return {
                ...state,
                showCountdown: action.payload,
            }
        case 'TOGGLE_ODD_EVEN':
            return {
                ...state,
                displayOddEven: action.payload,
            }
        default:
            return state;
        }
}

export default reducer;