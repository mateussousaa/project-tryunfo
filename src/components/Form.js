import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';

class Form extends Component {
  hasNoTrunfo = () => {
    const { cardInfo, onInputChange } = this.props;
    const { cardTrunfo } = cardInfo;
    return (
      <label htmlFor="trunfo-input">
        <input
          name="cardTrunfo"
          data-testid="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
          id="trunfo-input"
        />
        Super Trunfo
      </label>
    );
  }

  render() {
    const { cardInfo, onInputChange, onSaveButtonClick } = this.props;
    const rareOptions = ['Normal', 'Raro', 'Muito Raro'];
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled } = cardInfo;
    return (
      <div className="form-preview">
        <h3>Adicione nova carta</h3>
        <form>
          <Input
            name="cardName"
            text="Nome"
            testid="name-input"
            type="text"
            value={ cardInfo.cardName }
            handleChange={ onInputChange }
          />
          <Textarea
            name="cardDescription"
            text="Descrição"
            value={ cardInfo.cardDescription }
            handleChange={ onInputChange }
          />
          <Input
            name="cardAttr1"
            text="Attr01"
            testid="attr1-input"
            type="number"
            value={ cardInfo.cardAttr1 }
            handleChange={ onInputChange }
          />
          <Input
            name="cardAttr2"
            text="Attr02"
            testid="attr2-input"
            type="number"
            value={ cardInfo.cardAttr2 }
            handleChange={ onInputChange }
          />
          <Input
            name="cardAttr3"
            text="Attr03"
            testid="attr3-input"
            type="number"
            value={ cardInfo.cardAttr3 }
            handleChange={ onInputChange }
          />
          <Input
            name="cardImage"
            text="Imagem"
            testid="image-input"
            type="text"
            value={ cardInfo.cardImage }
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
              {
                rareOptions.map((o) => <option key={ o }>{ o }</option>)
              }
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
      </div>
    );
  }
}

Form.propTypes = {
  cardInfo: PropTypes.shape({
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
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
