import * as ServerAPI from '../utils/ServerAPI'
import * as types from '../constants/ActionTypes'

const loadCategories = categories => ({
  type: types.LOAD_CATEGORIES,
  categories
})

const loadPosts = posts => ({
  type: types.LOAD_POSTS,
  posts
})

export const getAllCategories = () => dispatch => {
  ServerAPI.getCategories()
  .then(categories => {
    dispatch(loadCategories(categories))
  })
}

export const getAllPosts = () => dispatch => {
  ServerAPI.getPosts()
  .then(posts => {
    dispatch(loadPosts(posts))
  })
}
