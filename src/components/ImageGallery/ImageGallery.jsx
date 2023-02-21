import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ items = [] }) => {
  return (
    <ImageGalleryList>
      {items.map(item => (
        <li key={item.id}>
          <ImageGalleryItem item={item} />
        </li>
      ))}
    </ImageGalleryList>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
