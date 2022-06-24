import React, { Component } from 'react';
import Input from './Input';
import Textarea from './Textarea';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      rareInput: 'normal',
      trunfoInput: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
    } = this.state;
    return (
      <form>
        <Input
          text="Nome da Carta:"
          testid="name-input"
          type="text"
          value={ nameInput }
          handleChange={ this.handleChange }
        />
        <Textarea
          text="Descrição da Carta:"
          value={ descriptionInput }
          handleChange={ this.handleChange }
        />
        <Input
          text="Atributo 1"
          testid="attr1-input"
          type="number"
          value={ attr1Input }
          handleChange={ this.handleChange }
        />
        <Input
          text="Atributo 2"
          testid="attr2-input"
          type="number"
          value={ attr2Input }
          handleChange={ this.handleChange }
        />
        <Input
          text="Atributo 3"
          testid="attr3-input"
          type="number"
          value={ attr3Input }
          handleChange={ this.handleChange }
        />
        <Input
          text="Imagem"
          testid="image-input"
          type="text"
          value={ imageInput }
          handleChange={ this.handleChange }
        />
        <label htmlFor="rare-input">
          Raridade da Carta
          <select
            data-testid="rare-input"
            name="rareInput"
            value={ rareInput }
            onChange={ this.handleChange }
            id="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Carta Tryunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            value={ trunfoInput }
            onChange={ this.handleChange }
            id="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
