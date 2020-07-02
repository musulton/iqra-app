import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array.isRequired,
};

const defaultProps = {
  data: [],
};

const displayName = 'FavoritesListComponent';

export default {
  propTypes,
  defaultProps,
  displayName,
};
