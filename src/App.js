import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default class App extends Component {
  state = {
    imageName: '',
    loadMore: false,
    page: 1,
    showModal: false,
    bigImageUrl: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };
  handleLoadMore = images => {
    if (images) {
      this.setState({ loadMore: true });
    }
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  openModal = event => {
    this.setState({ bigImageUrl: event.target.dataset.set, showModal: true });
  };

  render() {
    const { imageName, page, loadMore, showModal, bigImageUrl } = this.state;
    return (
      <>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          handleButton={this.handleLoadMore}
          imageName={imageName}
          page={page}
          openModal={this.openModal}
        />
        {loadMore && <Button loadMoreImages={this.loadMoreImages} />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={bigImageUrl} alt={imageName} />
          </Modal>
        )}
      </>
    );
  }
}
