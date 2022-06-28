import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

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
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
          className="img"
        />
        <div className="field">
          <span>Nome da Carta: </span>
          <p data-testid="name-card">
            {cardName}
          </p>
        </div>
        <div className="field">
          <span>Descrição da Carta: </span>
          <p data-testid="description-card">
            {cardDescription}
          </p>
        </div>
        <div className="field">
          <span>Atributo 1: </span>
          <p data-testid="attr1-card">
            {cardAttr1}
          </p>
        </div>
        <div className="field">
          <span>Atributo 2: </span>
          <p data-testid="attr2-card">
            {cardAttr2}
          </p>
        </div>
        <div className="field">
          <span>Atributo 3: </span>
          <p data-testid="attr3-card">
            {cardAttr3}
          </p>
        </div>
        <div className="field">
          <span>Raridade da Carta: </span>
          <p data-testid="rare-card">
            {cardRare}
          </p>
        </div>
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
