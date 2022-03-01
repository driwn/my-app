import React from 'react'

const listContext = React.createContext({
    list: [],
    setList: () => {},
})

export default listContext
