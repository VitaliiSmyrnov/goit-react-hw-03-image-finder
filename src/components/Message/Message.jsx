import PropTypes from 'prop-types';
import { StyledTitle, StyledImg } from './Message.styled';

export const Message = ({ text, image }) => {
  return (
    <>
      <StyledImg src={image} alt={text} />
      <StyledTitle>{text}</StyledTitle>
    </>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
