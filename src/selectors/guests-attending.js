export default(guests) => {
    return guests
            .map((guest) => (guest.hasReplied && guest.attending))
            .reduce((sum, value) => sum + (value ? 1 : 0), 0)
}