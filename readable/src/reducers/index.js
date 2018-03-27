import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const categories = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_CATEGORIES:
    return action.categories
    default:
      return state
  }
}

export default combineReducers({
  categories
})
