import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar, ImageGallery, Button, Loader, Message } from 'components';
import { fetchGallery } from 'services/galleryApi';
import ImageFindEmpty from 'assets/empty-collection-min.png';
import ImageFindError from 'assets/something-wrong.jpg';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    queryName: '',
    gallery: [],
    status: 'idle',
    page: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { queryName, page } = this.state;

    if (prevState.queryName !== queryName) {
      this.setState({ gallery: [] });
    }

    if (prevState.queryName !== queryName || prevState.page !== page) {
      this.setState({ status: 'pending' });

      fetchGallery(this.state)
        .then(data =>
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...data.hits],
            status: 'resolved',
          }))
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleFormSubmit = name => {
    this.setState({
      queryName: name,
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollMore(450);
  };

  render() {
    const { gallery, status, error } = this.state;
    const { handleFormSubmit, loadMore } = this;
    const isEmptyGallery = gallery.length === 0;

    return (
      <Wrapper>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery items={gallery} />

        {status === 'pending' && <Loader />}

        {!isEmptyGallery && <Button loadMore={loadMore} />}

        {isEmptyGallery && status === 'resolved' && (
          <Message text="Nothing found" image={ImageFindEmpty} />
        )}

        {status === 'rejected' && (
          <Message text={error.message} image={ImageFindError} />
        )}

        <ToastContainer autoClose={3000} theme="colored" />
      </Wrapper>
    );
  }
}
