const sortList = async (list, filter, page) => {
    const count = filter.count

    const startPoint = (page - 1) * count
    const endPoint = page * count

    const currentList = await list.slice(startPoint, endPoint - 1)

    return currentList
}

export default sortList
