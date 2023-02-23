import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar, ImageGallery, Button, Loader, Message } from 'components';
import { getImages } from 'services/galleryApi';
import ImageFindEmpty from 'assets/empty-collection-min.png';
import ImageFindError from 'assets/something-wrong1-min.png';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    status: 'idle',
    page: 1,
    error: null,
    isVisible: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ status: 'pending' });

      try {
        const data = await getImages(query, page);

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...data.hits],
          status: 'resolved',
          isVisible: page < Math.ceil(data.totalHits / 12),
        }));
      } catch {
        this.setState({
          error:
            'Oops, something went wrong. Please, reload the page to try again.',
          status: 'rejected',
        });
      }
    }
  }

  handleFormSubmit = name => {
    if (this.state.query !== name) {
      this.setState({
        query: name,
        page: 1,
        gallery: [],
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollMore(475);
  };

  render() {
    const { gallery, status, error, isVisible } = this.state;
    const { handleFormSubmit, loadMore } = this;
    const isEmptyGallery = gallery.length === 0;

    return (
      <Wrapper>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery items={gallery} />

        {status === 'pending' && <Loader />}

        {!isEmptyGallery && isVisible && (
          <Button loadMore={loadMore} status={status} />
        )}

        {isEmptyGallery && status === 'resolved' && (
          <Message text="Nothing found" image={ImageFindEmpty} />
        )}

        {status === 'rejected' && (
          <Message text={error} image={ImageFindError} />
        )}

        <ToastContainer autoClose={2200} theme="colored" />
      </Wrapper>
    );
  }
}
