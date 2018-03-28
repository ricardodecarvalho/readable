import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPosts } from '../actions'
import PostsList from './PostsList'

class Posts extends Component {

  componentDidMount () {
    this.props.getAllPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <PostsList
          posts={posts}
        />
      </div>
    )
  }
}

function mapStateToProps({posts}) {
    return {
        posts
    }
}

function mapDispatchToProps(dispatch) {
    return {
      getAllPosts: () => dispatch(getAllPosts())
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)
