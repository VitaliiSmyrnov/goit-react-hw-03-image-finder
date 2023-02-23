import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { StyledHeader } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({
      query: event.target.value.trim().toLowerCase(),
    });
  };

  handleQuerySubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    if (query === '') {
      return toast.error('Enter the name');
    }

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { handleQuerySubmit, handleQueryChange } = this;
    const { query } = this.state;

    return (
      <StyledHeader>
        <form onSubmit={handleQuerySubmit}>
          <button type="submit">
            <BsSearch size="20" />
            <span>Search</span>
          </button>

          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledHeader>
    );
  }
}
