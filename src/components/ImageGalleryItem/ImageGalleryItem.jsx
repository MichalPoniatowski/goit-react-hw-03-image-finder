// import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ data }) => {
  return (
    <>
      {data.map(({ largeImageURL, webformatURL, tags, id }) => (
        <li className="ImageGalleryItem" key={id}>
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
