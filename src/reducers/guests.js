// Guests Reducer

const guestsReducerDefaultState= [];

export default (state = guestsReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_GUEST':
            return [
                ...state,
                action.guest
            ];
        case 'REMOVE_GUEST':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_GUEST':
            return state.map((guest) => {
                if(guest.id === action.id) {
                    return {
                        ...guest,
                        ...action.updates
                    }
                } else {
                    return guest;
                }
            });
        case 'SET_GUESTS':
            return action.guests;
        default:
            return state;
    }
};