import './styles.css';

import React, { Component } from 'react';
// import Notiflix from "notiflix";
// import axios from "axios";
// import simpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchFotos } from './services/fetchFotoApi';

import { SearchBar } from './SearchBar';
import { ImageGallery } from './ImageGallery/';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    images: [],
    isLoading: false,
    error: null,
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
      const { searchQuery, currentPage } = this.state;
      const images = await fetchFotos(searchQuery, currentPage);
      console.log('IMAGES', images);
      this.setState({ images: images });
      if (this.state.currentPage === 1) {
        this.setState({ images: images });
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
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

    const { error, isLoading } = this.state;

    if (error) {
      return <div>Oops, something went wrong</div>;
    }
    if (isLoading) {
      return console.log('Loading...');
    }
    return (
      <div className="App">
        <SearchBar
          getQuery={this.getQuery}
          // searchQuery={this.state.searchQuery}
        />
        <ImageGallery>
          <ImageGalleryItem data={this.state.images} />
        </ImageGallery>
        <Button onClick={this.loadMore} />
      </div>
    );
  }
}
