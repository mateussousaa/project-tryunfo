import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const { text, name, value, handleChange } = this.props;
    return (
      <label htmlFor="description-input">
        { text }
        <textarea
          data-testid="description-input"
          name={ name }
          value={ value }
          onChange={ handleChange }
          id="description-input"
          rows={ 5 }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Textarea;
