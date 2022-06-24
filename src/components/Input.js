import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { text, testid, type, value, handleChange } = this.props;
    return (
      <label htmlFor={ testid }>
        { text }
        <input
          data-testid={ testid }
          type={ type }
          name={ testid }
          value={ value }
          onChange={ handleChange }
          id={ testid }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
