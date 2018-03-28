import React from 'react'
import { Link } from 'react-router-dom'

const PostsList = ({ posts }) => (
  <ul>
    {posts.length === 0 && (
      <li>No posts found</li>
    )}
    {posts.map(post =>
      <li key={post.id}>
        <Link to={{
          pathname: post.id
        }}>
          {post.title}
        </Link>
      </li>
    )}
  </ul>
)

export default PostsList
