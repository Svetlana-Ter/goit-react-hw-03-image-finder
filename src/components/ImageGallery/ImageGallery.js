import { Component } from 'react';
import Error from '../Error/Error';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import imageAPI from '../../services/imageApi';

export default class ImageInfo extends Component {
  static defaultProps = {
    imageName: '',
    page: 1,
  };
  static propTypes = {
    openModal: PropTypes.func,
    handleButton: PropTypes.func,
    imageName: PropTypes.string,
    page: PropTypes.number,
    key: PropTypes.string,
  };

  state = {
    images: null,
    error: null,
    status: 'idle',
  };
  componentDidUpdate(prevProps) {
    const currentName = this.props.imageName;
    let page = this.props.page;

    if (currentName !== prevProps.imageName) {
      this.setState({ status: 'pending' });
      page = 1;
      imageAPI
        .fetchImages(currentName, page)
        .then(images => {
          this.setState({ images: images.hits, status: 'resolved' });
          this.props.handleButton(images.hits);
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    } else if (page !== prevProps.page) {
      this.setState({ status: 'pending' });
      imageAPI
        .fetchImages(currentName, page)
        .then(images => {
          this.setState({
            images: [...this.state.images, ...images.hits],
            status: 'resolved',
          });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status } = this.state;
    if (status === 'idle') {
      return (
        <div className='ImageGallery-initialText'>
          Введите название для поиска картинки
        </div>
      );
    }
    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <Error message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className='ImageGallery' onClick={this.props.openModal}>
          {images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </ul>
      );
    }
  }
}
