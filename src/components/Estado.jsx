import PropTypes from "prop-types"
import React, { Component } from 'react'
import data from '../data' 

export default class Estado extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <select
      name='estado'
      value={value}
      onChange={func}
      required
      >
        {data.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    )
  }
}

Estado.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
