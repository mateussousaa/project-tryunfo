import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;
    return (
      <div className="card-container">
        <p data-testid="name-card">
          { `Nome da Carta: ${cardName}` }
        </p>
        <p data-testid="description-card">
          { `Descrição da Carta: ${cardDescription}` }
        </p>
        <p data-testid="attr1-card">
          { `Atributo 1: ${cardAttr1}` }
        </p>
        <p data-testid="attr2-card">
          { `Atributo 2: ${cardAttr2}` }
        </p>
        <p data-testid="attr3-card">
          { `Atributo 3: ${cardAttr3}` }
        </p>
        <p data-testid="rare-card">
          { `Raridade da Carta: ${cardRare}` }
        </p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        {cardTrunfo ? <span data-testid="trunfo-card">Super Trunfo</span> : false }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
