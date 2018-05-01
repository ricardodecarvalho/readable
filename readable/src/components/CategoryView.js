import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import { Link } from 'react-router-dom'

class CategoryView extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  render() {
    const { category } = this.props.match.params
    const { posts } = this.props
    return (
      <div>
        <h1>{capitalize(category)}</h1>
        <ul>
          {posts.length === 0 && (
            <li>No posts found</li>
          )}
          {posts.filter((post) => post.category === category).map(post =>
            <li key={post.id}>
              <Link to={{
                pathname: `${post.category}/${post.id}`
              }}>
                {post.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  }
}

export default connect(mapStateToProps)(CategoryView)
