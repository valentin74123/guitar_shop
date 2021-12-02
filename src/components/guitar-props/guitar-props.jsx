import PropTypes from 'prop-types';

export const guitarPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  article: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  strings: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number,
});
