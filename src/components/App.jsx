import React, { Component } from 'react';

import './styles.css';
import { fetchFotos } from './services/fetchFotoApi';
import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery/';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    isModalOpen: false,
    imageURL: '',
    imageAlt: '',
  };

  getURL = (imageURL, alt) => {
    this.setState(
      { imageURL: imageURL, imageAlt: alt, isModalOpen: true },
      () =>
        console.log(
          'URL',
          imageURL,
          'Alt',
          alt,
          'isModalOpen',
          this.state.isModalOpen
        )
    );
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  getQuery = event => {
    event.preventDefault();
    const searchKeyWord = event.target.elements.searchQuery.value;
    if (searchKeyWord !== this.state.searchQuery) {
      this.setState({
        searchQuery: searchKeyWord,
        currentPage: 1,
        images: [],
      });
    }
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      console.log('STATE', this.state);
      this.showImages();
    }
  }

  showImages = async () => {
    this.setState({ isLoading: true });

    try {
      const { searchQuery, currentPage, totalPages } = this.state;

      const data = await fetchFotos(searchQuery, currentPage);
      const images = data.hits;
      this.setState({ totalPages: Math.ceil(data.total / 40) });
      console.log('IMAGES:', images);

      if (this.state.currentPage === 1) {
        this.setState({ images: images });
      } else {
        this.setState(
          prevState => ({
            images: [...prevState.images, ...images],
            totalPages: totalPages,
          }),
          () => console.log('STATE', this.state)
        );
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = event => {
    event.preventDefault();
    return this.setState(
      prevState => ({
        currentPage: prevState.currentPage + 1,
      }),
      console.log('PAGE', this.state.currentPage)
    );
  };

  render() {
    console.log('RENDER');

    const {
      error,
      isLoading,
      images,
      totalPages,
      currentPage,
      imageURL,
      imageAlt,
      isModalOpen,
    } = this.state;

    return (
      <div className="App">
        {isModalOpen && (
          <Modal modalURL={imageURL} alt={imageAlt} onClose={this.closeModal} />
        )}

        <SearchBar getQuery={this.getQuery} />
        {error && <h1>Oops, something went wrong</h1>}
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery>
            <ImageGalleryItem data={this.state.images} saveURL={this.getURL} />
          </ImageGallery>
        )}
        {images.length !== 0 && currentPage !== totalPages && (
          <Button onClick={this.loadMore} />
        )}
      </div>
    );
  }
}
