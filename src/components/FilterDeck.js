import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FilterDeck extends Component {
  render() {
    const rareOptions = ['Todas', 'Normal', 'Raro', 'Muito Raro'];
    const { filters, handleSearch, handleTrunfoFilter } = this.props;
    return (
      <div className="filters">
        <input
          name="nameFilter"
          data-testid="name-filter"
          type="text"
          placeholder="Nome da carta"
          onChange={ handleSearch }
          value={ filters.nameFilter }
          disabled={ filters.trunfoFilter }
        />
        <select
          name="rareFilter"
          data-testid="rare-filter"
          onChange={ handleSearch }
          value={ filters.rareFilter }
          disabled={ filters.trunfoFilter }
        >
          {
            rareOptions.map((o) => <option key={ o }>{ o }</option>)
          }
        </select>
        <label htmlFor="trunfo-filter">
          Super Trunfo
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="trunfoFilter"
            onChange={ handleTrunfoFilter }
            id="trunfo-filter"
            value={ filters.trunfoFilter }
          />
        </label>
      </div>
    );
  }
}

FilterDeck.propTypes = {
  filters: PropTypes.shape({
    nameFilter: PropTypes.string,
    rareFilter: PropTypes.string,
    trunfoFilter: PropTypes.bool,
  }).isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleTrunfoFilter: PropTypes.func.isRequired,
};
