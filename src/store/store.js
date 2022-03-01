import { combineReducers, createStore } from 'redux'
import currentListReducer from '../reducers/currentListReducer'
import currentPageReducer from '../reducers/currentPageReducer'
import filteredListReducer from '../reducers/filteredListReducer'
import filterReducer from '../reducers/filterReducer'

const rootReducer = combineReducers({
    filter: filterReducer,
    page: currentPageReducer,
    list: currentListReducer,
    filteredList: filteredListReducer,
})

const store = createStore(rootReducer)

export default store
