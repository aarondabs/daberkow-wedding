// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
// DISPLAY_ALL
export const displayAll = () => ({
    type: 'DISPLAY_ALL'
});
// DISPLAY_ATTENDING
export const displayAttending = () => ({
    type: 'DISPLAY_ATTENDING'
});
// DISPLAY_DECLINED
export const displayDeclined = () => ({
    type: 'DISPLAY_DECLINED'
});
// DISPLAY_NO_RESPONSE
export const displayNoResponse = () => ({
    type: 'DISPLAY_NO_RESPONSE'
});
// DISPLAY_PLUS_ONE
export const displayPlusOne = () => ({
    type: 'DISPLAY_PLUS_ONE'
});
