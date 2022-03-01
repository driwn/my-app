const filterList = async (list, filter) => {
    const gender = filter.gender
    const country = filter.country

    const filteredList = await list.filter((user) => {
        if (gender) {
            if (user.gender !== gender) return false
        }
        if (country) {
            if (user.nat !== country) return false
        }
        return true
    })
    return filteredList
}

export default filterList
