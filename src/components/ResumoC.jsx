import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class ResumoC extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label>
        Resumo do currículo
        <textarea
          required
          maxLength='1000'
          name='resumoC'
          value={value}
          onChange={func}
          cols="10" rows="5"
        ></textarea>
      </label>

    )
  }
}

ResumoC.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
