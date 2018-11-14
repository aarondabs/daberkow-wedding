export default({ firstName, lastName }, guests) => {
    const match = guests.filter((guest) => {
        return ((firstName.trim().toLowerCase() === guest.firstName.trim().toLowerCase()) && (lastName.trim().toLowerCase() === guest.lastName.trim().toLowerCase()));
    });
    if(match === undefined || match.length == 0){
        return [];
    } else {
        const partyName = match[0].partyName;
        return guests.filter((guest) => {
            return guest.partyName === partyName;
        });
    }
}