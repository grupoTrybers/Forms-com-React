import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Email extends Component {
  render() {
    const {func, value} = this.props;
    return (
      <label>
        Email:
        <input
        type='email'
        name='email'
        maxLength='50'
        onChange={func}
        value={value}
        required
        />
      </label>
    )
  }
}

Email.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
