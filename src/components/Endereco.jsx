import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Endereco extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label>
        Endereço:
        <input
          type="text"
          name='endereco'
          maxLength='200'
          value={value}
          onChange={func}
          required
        />
      </label>
    )
  }
}

Endereco.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
