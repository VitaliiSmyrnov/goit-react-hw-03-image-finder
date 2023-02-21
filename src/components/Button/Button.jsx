import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <StyledButton type="button" onClick={()=>loadMore()}>
      Load more
    </StyledButton>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};