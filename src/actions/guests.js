import database from '../firebase/firebase';

// ADD_GUEST
export const addGuest = (guest) => ({
    type: 'ADD_GUEST',
    guest
});

export const startAddGuest = (guestData = {}) => {
    return (dispatch) => {
        const {
            firstName = '', 
            lastName = '',
            partyName = '',
            hasReplied = false,
            attending = false, 
            hasPlusOne = false,
            plusOneName = ''
        } = guestData;
        const guest = { firstName, lastName, partyName, hasReplied, attending, hasPlusOne, plusOneName };

        return database.ref('guests').push(guest).then((ref) => {
            dispatch(addGuest({
                id: ref.key,
                ...guest
            }));
        });
    };
};

// REMOVE_GUEST
export const removeGuest = ({ id } = {}) => ({
    type: 'REMOVE_GUEST',
    id
});

export const startRemoveGuest = ({ id } = {}) => {
    return (dispatch) => {
        return database.ref(`guests/${id}`).remove().then(() => {
            dispatch(removeGuest({ id }));
        });
    };
};

// EDIT_GUEST
export const editGuest = (id, updates) => ({
    type: 'EDIT_GUEST',
    id,
    updates
});

export const startEditGuest = (id, updates) => {
    return (dispatch) => {
        return database.ref(`guests/${id}`).update(updates).then(() => {
            dispatch(editGuest(id, updates));
        });
    };
};

// SET_EXPENSES
export const setGuests = (guests) => ({
    type: 'SET_GUESTS',
    guests
});

export const startSetGuests = () => {
    return (dispatch) => {
        return database.ref('guests')
            .once('value')
            .then((snapshot) => {
                const guests = [];

                snapshot.forEach((childSnapshot) => {
                    guests.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });

                dispatch(setGuests(guests));
            });
    };
};