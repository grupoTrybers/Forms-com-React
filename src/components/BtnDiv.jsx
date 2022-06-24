import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class BtnDiv extends Component {
  render() {
    const { func } = this.props
    return (
      <>
        <button onClick={func}>consolidado dos dados</button>
      </>
    )
  }
}

BtnDiv.propTypes = {
  func: PropTypes.func.isRequired
}