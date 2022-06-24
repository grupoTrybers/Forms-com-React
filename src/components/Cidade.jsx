import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Cidade extends Component {
  render() {
    const { func, funcBlur, value } = this.props;
    return (
      <label>
        Cidade:
        <input
          type='text'
          name='cidade'
          maxLength='28'
          onChange={func}
          value={value}
          onBlur={funcBlur}
          required
        ></input>
      </label>
    )
  }
}

Cidade.propTypes = {
  func: PropTypes.func,
  funcBlur: PropTypes.func,
  value: PropTypes.string
}
