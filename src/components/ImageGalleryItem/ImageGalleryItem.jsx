// import css from './ImageGalleryItem.module.css';
import { nanoid } from 'nanoid';

export const ImageGalleryItem = ({ data }) => {
  return (
    <>
      {data.map(({ largeImageURL, webformatURL, tags }) => (
        <li className="ImageGalleryItem" key={nanoid()}>
          <div>
            <a href={largeImageURL}>
              <img
                src={webformatURL}
                alt={tags}
                loading="lazy"
                className="ImageGalleryItem-image"
              />
            </a>
          </div>
        </li>
      ))}
    </>
  );
};
