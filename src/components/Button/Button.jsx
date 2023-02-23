import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = ({ loadMore, status }) => {
  return (
    <StyledButton type="button" onClick={loadMore}>
      {status === 'pending' ? 'Loading...' : 'Load more'}
    </StyledButton>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
