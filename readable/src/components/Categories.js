import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCategories } from '../actions'
import CategoriesList from './CategoriesList'

class Categories extends Component {

  componentDidMount () {
    this.props.getAllCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div>
        <CategoriesList
          categories={categories}
        />
      </div>
    )
  }
}

function mapStateToProps({categories}) {
    return {
        categories
    }
}

function mapDispatchToProps() {
    return {
        getAllCategories
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
