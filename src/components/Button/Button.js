import PropTypes from 'prop-types';
export default function Button({ loadMoreImages }) {
  return (
    <div className='Button-wrap'>
      <button type='button' className='Button' onClick={loadMoreImages}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  loadMoreImages: PropTypes.func,
};
