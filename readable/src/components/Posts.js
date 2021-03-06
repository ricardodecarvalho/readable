import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { sortPosts } from '../utils/helpers'

class Posts extends Component {
  render() {
    const { filter } = this.props;
    const posts = sortPosts(this.props.posts, filter);
    return (
      <div>
        <ul>
          {posts.length === 0 && (
            <li>No posts found</li>
          )}
          {posts.map(post =>
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

function mapStateToProps({ posts, filter }) {
    return {
        posts,
        filter
    }
}

export default connect(mapStateToProps)(Posts)
