import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    console.log(hasTrunfo);
    return (
      <form>
        <Input
          text="Nome da Carta:"
          testid="name-input"
          type="text"
          value={ cardName }
          handleChange={ onInputChange }
        />
        <Textarea
          text="Descrição da Carta:"
          value={ cardDescription }
          handleChange={ onInputChange }
        />
        <Input
          text="Atributo 1"
          testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          handleChange={ onInputChange }
        />
        <Input
          text="Atributo 2"
          testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          handleChange={ onInputChange }
        />
        <Input
          text="Atributo 3"
          testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          handleChange={ onInputChange }
        />
        <Input
          text="Imagem"
          testid="image-input"
          type="text"
          value={ cardImage }
          handleChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          Raridade da Carta
          <select
            data-testid="rare-input"
            name="rareInput"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Carta Tryunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.string.isRequired,
  isSaveButtonDisabled: PropTypes.string.isRequired,
  onInputChange: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.string.isRequired,
};

export default Form;
