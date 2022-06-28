import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckPreview extends Component {
  render() {
    const { nameFilter, cards, handleDeleteButton } = this.props;
    return (
      cards
        .filter((card) => card.cardName.toLowerCase().includes(nameFilter.toLowerCase()))
        .map((card) => (
          <div
            className="card"
            key={ card.cardName }
          >
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ handleDeleteButton }
              id={ card.cardName }
            >
              Excluir
            </button>
          </div>
        ))
    );
  }
}

DeckPreview.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
};

export default DeckPreview;
