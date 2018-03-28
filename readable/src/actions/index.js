import * as ServerAPI from '../utils/ServerAPI'
import * as types from '../constants/ActionTypes'

const loadCategories = categories => ({
  type: types.LOAD_CATEGORIES,
  categories
})

export const getAllCategories = () => dispatch => {
  ServerAPI.getCategories()
  .then(categories => {
    dispatch(loadCategories(categories))
  })
}
