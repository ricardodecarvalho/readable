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

const posts = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POSTS:
      return action.posts
    case types.LOAD_POST_BY_ID:
      return action.posts
    default:
      return state
  }
}

const initialFiltersState = {
  active_filter: 'votes-desc',
  sorts: [
    {
      'id': 'votes-asc',
      'title': 'Votes Low-high',
      'sortByFields': ['voteScore', '-timestamp']
    },
    {
      'id': 'votes-desc',
      'title': 'Votes High-low',
      'sortByFields': ['-voteScore', '-timestamp']
    },
    {
      'id': 'date-asc',
      'title': 'Date Old-new',
      'sortByFields': ['timestamp', '-voteScore']
    },
    {
      'id': 'date-desc',
      'title': 'Date New-old',
      'sortByFields': ['-timestamp', '-voteScore']
    },
  ]
};

function filter (state = initialFiltersState, action) {
  switch (action.type) {
    case types.LOAD_FILTER:
      return {
        ...state,
        active_filter: action.active_filter
      };
    default :
      return state;
  }
}

export default combineReducers({
  categories, posts, filter
})
