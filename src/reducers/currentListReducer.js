const defaultState = {
    list: [],
}

const currentListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LIST':
            return { list: action.payload }
        default:
            return state
    }
}

export default currentListReducer
