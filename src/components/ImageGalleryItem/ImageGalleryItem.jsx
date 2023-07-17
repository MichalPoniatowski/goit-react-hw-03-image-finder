import React from 'react';
import { nanoid } from 'nanoid';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ data, saveURL }) => {
  const handleClick = (event, url, alt) => {
    event.preventDefault();
    saveURL(url, alt);
  };

  return (
    <>
      {data.map(({ largeImageURL, webformatURL, tags }) => (
        <li className={css.ImageGalleryItem} key={nanoid()}>
          <div>
            <a
              href={largeImageURL}
              onClick={event => handleClick(event, largeImageURL, tags)}
            >
              <img
                src={webformatURL}
                alt={tags}
                loading="lazy"
                className={css['ImageGalleryItem-image']}
              />
            </a>
          </div>
        </li>
      ))}
    </>
  );
};
