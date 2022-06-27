import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';

class Form extends Component {
  hasNoTrunfo = () => {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo-input">
        Carta Tryunfo
        <input
          name="cardTrunfo"
          data-testid="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          id="trunfo-input"
        />
      </label>
    );
  }

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
    return (
      <form>
        <Input
          name="cardName"
          text="Nome da Carta:"
          testid="name-input"
          type="text"
          value={ cardName }
          handleChange={ onInputChange }
        />
        <Textarea
          name="cardDescription"
          text="Descrição da Carta:"
          value={ cardDescription }
          handleChange={ onInputChange }
        />
        <Input
          name="cardAttr1"
          text="Atributo 1"
          testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          handleChange={ onInputChange }
        />
        <Input
          name="cardAttr2"
          text="Atributo 2"
          testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          handleChange={ onInputChange }
        />
        <Input
          name="cardAttr3"
          text="Atributo 3"
          testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          handleChange={ onInputChange }
        />
        <Input
          name="cardImage"
          text="Imagem"
          testid="image-input"
          type="text"
          value={ cardImage }
          handleChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          Raridade da Carta
          <select
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            id="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {
          hasTrunfo
            ? <span>Você já tem um Super Trunfo em seu baralho</span>
            : this.hasNoTrunfo()
        }
        <button
          name="isSaveButtonDisabled"
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }) }
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
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
