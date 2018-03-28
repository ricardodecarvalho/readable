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
    console.log(categories)
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

function mapDispatchToProps(dispatch) {
    return {
      getAllCategories: () => dispatch(getAllCategories())
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)
