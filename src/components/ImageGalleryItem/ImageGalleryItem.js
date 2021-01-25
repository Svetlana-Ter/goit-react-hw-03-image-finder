import PropTypes from 'prop-types';
export default function ImageGalleryItem({
  image: { webformatURL = '', tags = '', largeImageURL = '' },
}) {
  return (
    <li className='ImageGalleryItem'>
      <img
        src={webformatURL}
        alt={tags}
        className='ImageGalleryItem-image'
        data-set={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};
