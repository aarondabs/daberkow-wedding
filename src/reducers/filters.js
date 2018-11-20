// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    display: 'all',
};

export default (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'DISPLAY_ALL':
            return {
                ...state,
                display: 'all'
            };
        case 'DISPLAY_ATTENDING':
            return {
                ...state,
                display: 'attending'
            };
        case 'DISPLAY_DECLINED':
            return {
                ...state,
                display: 'declined'
            };
        case 'DISPLAY_NO_RESPONSE':
            return {
                ...state,
                display: 'noResponse'
            };
        case 'DISPLAY_PLUS_ONE':
            return {
                ...state,
                display: 'plusOne'
            };
        default:
            return state;
    }
};