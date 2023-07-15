// import css from './ImageGalleryItem.module.css';
import { nanoid } from 'nanoid';

// export const ImageGalleryItem = ({ data, saveURL }) => {
//   return (
//     <>
//       {data.map(({ largeImageURL, webformatURL, tags }) => (
//         <li className="ImageGalleryItem" key={nanoid()}>
//           <div>
//             <a href={largeImageURL} onClick={saveURL}>
//               <img
//                 src={webformatURL}
//                 alt={tags}
//                 loading="lazy"
//                 className="ImageGalleryItem-image"
//               />
//             </a>
//           </div>
//         </li>
//       ))}
//     </>
//   );
// };

export const ImageGalleryItem = ({ data, saveURL }) => {
  const handleClick = (event, url, alt) => {
    event.preventDefault();
    saveURL(url, alt);
  };

  return (
    <>
      {data.map(({ largeImageURL, webformatURL, tags }) => (
        <li className="ImageGalleryItem" key={nanoid()}>
          <div>
            <a
              href={largeImageURL}
              onClick={event => handleClick(event, largeImageURL, tags)}
            >
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
