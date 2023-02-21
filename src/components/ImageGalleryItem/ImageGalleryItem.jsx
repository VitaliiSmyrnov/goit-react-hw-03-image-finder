import { Component } from 'react';
import { Modal } from 'components';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  openModal = () => this.setState({ isOpenModal: true });
  closeModal = () => this.setState({ isOpenModal: false });

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.item;
    const { isOpenModal } = this.state;

    return (
      <>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />
        {isOpenModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}
