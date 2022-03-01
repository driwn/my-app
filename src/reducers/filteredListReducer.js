const defaultState = {
    filteredList: [],
}

const filteredListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_FILTERED_LIST':
            return { filteredList: action.payload }
        default:
            return state
    }
}

export default filteredListReducer
