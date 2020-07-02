import PropTypes from 'prop-types';

import {noop} from '../../utils/Helpers';

const propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

const defaultProps = {
  onPress: noop,
};

const displayName = 'ItemCategoryComponent';

export default {
  propTypes,
  defaultProps,
  displayName,
};
