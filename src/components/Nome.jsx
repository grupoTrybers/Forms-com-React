import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Nome extends Component {
  render() {
    const {func, value} = this.props
    return (
      <label>
        Nome:
        <input
        type='text'
       maxLength='40'
       value={value}
       onChange={func}
       required
       />
      </label>
      
    )
  }
}

Nome.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
