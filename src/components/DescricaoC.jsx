import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class DescricaoC extends Component {
  render() {
    const { func, value } = this.props;
    return (
      <label>
        Descrição do cargo
        <textarea
          required
          maxLength='500'
          name='descricao'
          value={value}
          onChange={func}
          cols="10" rows="5"
        ></textarea>
      </label>

    )
  }
}

DescricaoC.propTypes = {
  func: PropTypes.func,
  value: PropTypes.string
}
