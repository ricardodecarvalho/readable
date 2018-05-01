import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadFilter } from '../actions'

class Filter extends Component {

  onLoadFilter(e) {
    this.props.loadFilter(e.target.value);
  }

  render() {
    const { filter } = this.props;
    return (
      <div>
        <label>Sort By: </label>
        <select
          defaultValue={filter.active_filter}
          onChange={(e) => { this.onLoadFilter(e) }}
        >
          {filter.sorts && (
            filter.sorts.map((item, key) => (
              <option
                key={key}
                value={item.id}
              >{item.title}</option>
            ))
          )}
        </select>
      </div>
    )
  }
}

function mapStateToProps ({ filter }) {
  return {
    filter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    loadFilter: (active_filter) => dispatch(loadFilter(active_filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
