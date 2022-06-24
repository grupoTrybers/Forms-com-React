import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Tipo extends Component {
  render() {
    const { func } = this.props;
    return (
      <>
        <input
          type='radio'
          value='Casa'
          name="tipo"
          onChange={func}
        /> Casa

        <input
          type='radio'
          value='Apartamento'
          name="tipo"
          onChange={func}
        />Apartamento
      </>
    )
  }
}

Tipo.propTypes = {
  func: PropTypes.func
}
