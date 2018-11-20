export default(guests) => {
    return guests
            .map((guest) => (guest.hasPlusOne && !!guest.plusOneName))
            .reduce((sum, value) => sum + (value ? 1 : 0), 0)
}