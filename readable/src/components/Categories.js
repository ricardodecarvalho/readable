import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { capitalize } from '../utils/helpers'

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {categories.map(categorie =>
          <li key={categorie.path}>
            <Link to={{
              pathname: `/${categorie.path}`
            }}>
              {capitalize(categorie.name)}
            </Link>
          </li>
        )}
      </ul>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Categories)
