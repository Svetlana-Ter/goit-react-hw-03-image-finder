import PropTypes from 'prop-types';
export default function Error({ message = '' }) {
  return <h1>{message}</h1>;
}

Error.propTypes = {
  message: PropTypes.string,
};
