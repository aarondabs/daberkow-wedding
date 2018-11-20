// Get visible guests
export default (guests, { text, display }) => {
    return guests.filter((guest) => {
        const guestName = `${guest.firstName} ${guest.lastName}`;
        const textMatch = guestName.toLowerCase().includes(text.toLowerCase());
        switch(display) {
            case 'all':
                return textMatch;
            case 'attending':
                return textMatch && guest.hasReplied && guest.attending;
            case 'declined':
                return textMatch && guest.hasReplied && !guest.attending;
            case 'noResponse':
                return textMatch && !guest.hasReplied;
            case 'plusOne':
                return textMatch && !!guest.plusOneName;
            default:
                return true;
        }
    }).sort((a, b) => {
        return a.partyName < b.partyName ? -1 : 1;
    });
};