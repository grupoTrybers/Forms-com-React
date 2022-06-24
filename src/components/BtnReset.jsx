import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class BtnReset extends Component {
  render() {
    const { func } = this.props
    return (
      <button onClick={func}>Reset</button>
    )
  }
}

BtnReset.propTypes = {
  func: PropTypes.func
}
