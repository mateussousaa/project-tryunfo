import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textarea extends Component {
  render() {
    const { text, value, handleChange } = this.props;
    return (
      <label htmlFor="description-input">
        { text }
        <textarea
          data-testid="description-input"
          name="descriptionInput"
          value={ value }
          onChange={ handleChange }
          id="description-input"
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Textarea;
