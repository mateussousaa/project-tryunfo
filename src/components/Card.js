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
      <div className="card">
        <span>Nome da Carta:</span>
        <p data-testid="name-card">
          {cardName}
        </p>
        <span>Descrição da Carta:</span>
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <span>Atributo 1:</span>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <span>Atributo 2:</span>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <span>Atributo 3:</span>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <span>Raridade da Carta:</span>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          className="img"
        />
        {
          cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>
        }
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
