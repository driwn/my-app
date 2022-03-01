const defaultState = {
    gender: null,
    count: 8,
    country: null,
}

const filterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_GENDER':
            return { ...state, gender: action.payload }
        case 'SET_COUNT':
            return { ...state, count: action.payload }
        case 'SET_COUNTRY':
            return { ...state, country: action.payload }
        default:
            return state
    }
}

export default filterReducer
