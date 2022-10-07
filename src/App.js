import React from 'react';
import Form from './components/Form';
import DeckPreview from './components/DeckPreview';
import CardPreview from './components/CardPreview';
import FilterDeck from './components/FilterDeck';
import './App.css';
import initialCards from './initialCards';
import fade from './images/fade.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: 'Fade',
      cardDescription: 'Valorant',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: fade,
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [...initialCards],
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
  }

  verifyAttributesConditions = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const attributes = [cardAttr1, cardAttr2, cardAttr3];
    const maxPowerByCard = 210;
    const maxPowerByAttr = 90;
    const validation = attributes
      .every((attr) => parseInt(attr, 10) >= 0 && parseInt(attr, 10) <= maxPowerByAttr);
    if (!validation) return validation;
    return attributes
      .reduce((acc, attr) => acc + parseInt(attr, 10), 0) <= maxPowerByCard;
  }

  validateSaveButton = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const attrsOk = this.verifyAttributesConditions();
    console.log(attrsOk);
    const fieldsOk = cardName && cardDescription && cardImage && cardRare;
    this.setState({
      isSaveButtonDisabled: !(attrsOk && fieldsOk),
    });
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateSaveButton);
  }

  onSaveButtonClick = (newCard) => {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: prevState.hasTrunfo ? true : newCard.cardTrunfo,
      isSaveButtonDisabled: true,
      cards: [...prevState.cards, newCard],
    }));
  }

  handleDeleteButton = ({ target }) => {
    const { cards } = this.state;
    const { id } = target;
    const itsATrunfo = cards.find((card) => card.cardName === id).cardTrunfo;
    const filteredDeck = cards.filter((card) => card.cardName !== id);
    this.setState((prevState) => ({
      cards: filteredDeck,
      hasTrunfo: itsATrunfo ? false : prevState.hasTrunfo,
    }));
  }

  handleSearch = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleTrunfoFilter = ({ target }) => {
    const { checked } = target;
    this.setState({
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: checked,
    });
  }

  render() {
    const { nameFilter, trunfoFilter, rareFilter } = this.state;
    return (
      <main>
        <div className="logo">
          <span>Tryunfant</span>
        </div>
        <div className="preview-container">
          <Form
            cardInfo={ { ...this.state } }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <CardPreview
            cardInfo={ { ...this.state } }
          />
        </div>
        <FilterDeck
          filters={ { nameFilter, trunfoFilter, rareFilter } }
          handleSearch={ this.handleSearch }
          handleTrunfoFilter={ this.handleTrunfoFilter }
        />
        <DeckPreview
          cardInfo={ { ...this.state } }
          handleDeleteButton={ this.handleDeleteButton }
        />
      </main>
    );
  }
}

export default App;
