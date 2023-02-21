import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import { StyledHeader } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    queryName: '',
  };

  handleQueryNameChange = event => {
    this.setState({
      queryName: event.currentTarget.value.trim().toLowerCase(),
    });
  };

  handleQueryNameSubmit = event => {
    event.preventDefault();
    const { queryName } = this.state;

    if (queryName === '') {
      return toast.error('Enter the name');
    }

    this.props.onSubmit(queryName);
    this.setState({ queryName: '' });
  };

  render() {
    const { handleQueryNameSubmit, handleQueryNameChange } = this;

    return (
      <StyledHeader>
        <form onSubmit={handleQueryNameSubmit}>
          <button type="submit">
            <BsSearch size="25" />
            <span>Search</span>
          </button>

          <input
            type="text"
            onChange={handleQueryNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledHeader>
    );
  }
}
