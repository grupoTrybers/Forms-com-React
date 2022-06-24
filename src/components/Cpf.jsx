import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Cpf extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label>
        Cpf:
        <input
        type='number'
        name='cpf'
        maxLength='11'
        value={value}
        onChange={func}
        required
        />
      </label>
    )
  }
}

Cpf.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
