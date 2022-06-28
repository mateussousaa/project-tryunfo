import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckPreview extends Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      trunfoFilter,
      cards,
      handleDeleteButton,
    } = this.props;
    const nameFilterLow = nameFilter.toLowerCase();
    return (
      cards
        .filter((card) => card.cardName.toLowerCase().includes(nameFilterLow))
        .filter((card) => (rareFilter === 'todas' ? true : rareFilter === card.cardRare))
        .filter((card) => (trunfoFilter ? card.cardTrunfo === true : true))
        .map((card) => (
          <div
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
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
};

export default DeckPreview;
