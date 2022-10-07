import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../logo_tryunfo.png';

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
      <div className="card-border">
        <div className="card">
          <div className="field name">
            <p data-testid="name-card">
              {cardName}
            </p>
          </div>
          <div className="field image">
            {
              cardImage
              && <img
                data-testid="image-card"
                src={ cardImage }
                alt="preview"
                className="img"
              />
            }
          </div>
          <div className="field description">
            <p data-testid="description-card">
              {cardDescription}
            </p>
          </div>
          <div className="field">
            <span>Attr 1</span>
            <p data-testid="attr1-card">
              {cardAttr1}
            </p>
          </div>
          <div className="field">
            <span>Attr 2</span>
            <p data-testid="attr2-card">
              {cardAttr2}
            </p>
          </div>
          <div className="field">
            <span>Attr 3</span>
            <p data-testid="attr3-card">
              {cardAttr3}
            </p>
          </div>
          <div className="field">
            <span>Raridade</span>
            <p data-testid="rare-card">
              {cardRare}
            </p>
          </div>
          {
            cardTrunfo && <img className="trunfo" src={ logo } alt="a" />
          }
        </div>
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
