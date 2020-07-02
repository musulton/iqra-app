import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array.isRequired,
  scroll: PropTypes.bool,
};

const defaultProps = {
  scroll: false,
};

const displayName = 'CategoryListComponent';

export default {
  propTypes,
  defaultProps,
  displayName,
};
