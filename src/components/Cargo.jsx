import PropTypes from "prop-types"
import React, { Component } from 'react'

export default class Cargo extends Component {
  render() {
    const { func, value, onMouse } = this.props;
    return (
      <label>
        Cargo
        <textarea
          name="cargo"
          cols="10" rows="5"
          maxLength='40'
          value={value}
          onChange={func}
          onMouseEnter={onMouse}
          required
        ></textarea>
      </label>
    )
  }
}

Cargo.propTypes = {
  func: PropTypes.func,
  onMouse: PropTypes.func,
  value: PropTypes.string
}
