import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckPreview extends Component {
  render() {
    const { cardInfo, handleDeleteButton } = this.props;
    const { nameFilter, rareFilter, trunfoFilter, cards } = cardInfo;
    const nameFilterLow = nameFilter.toLowerCase();
    return (
      <div className="deck-preview">
        {
          cards
            .filter((c) => c.cardName.toLowerCase().includes(nameFilterLow))
            .filter((c) => (rareFilter === 'todas' ? true : rareFilter === c.cardRare))
            .filter((c) => (trunfoFilter ? c.cardTrunfo === true : true))
            .map((c) => (
              <div
                className="deck-preview-card"
                key={ c.cardName }
              >
                <Card
                  cardName={ c.cardName }
                  cardDescription={ c.cardDescription }
                  cardAttr1={ c.cardAttr1 }
                  cardAttr2={ c.cardAttr2 }
                  cardAttr3={ c.cardAttr3 }
                  cardImage={ c.cardImage }
                  cardRare={ c.cardRare }
                  cardTrunfo={ c.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ handleDeleteButton }
                  id={ c.cardName }
                >
                  Excluir
                </button>
              </div>
            ))
        }
      </div>
    );
  }
}

DeckPreview.propTypes = {
  cardInfo: PropTypes.shape({
    nameFilter: PropTypes.string.isRequired,
    rareFilter: PropTypes.string.isRequired,
    trunfoFilter: PropTypes.bool.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
};

export default DeckPreview;
