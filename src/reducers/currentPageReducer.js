const defaultState = {
    page: 1,
}

const currentPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return { page: action.payload }
        default:
            return state
    }
}

export default currentPageReducer
