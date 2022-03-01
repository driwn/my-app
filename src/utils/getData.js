const getData = async () => {
    try {
        let headers = {}
        headers['Content-Type'] = 'application/json'
        const url = 'https://randomuser.me/api/?results=500'
        const method = 'GET'
        const response = await fetch(url, { method, headers })
        const data = await response.json()
        return data.results
    } catch (error) {
        console.log(error)
    }
}

export default getData
