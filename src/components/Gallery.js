import { useState } from 'react';
import './Gallery.scss';

function Gallery(props) {
  const { gallery } = props;
  const [source, setSource] = useState(gallery[0]?.image?.url);

  function select(event) {
    const { tagName } = event.target;
    if (tagName === 'IMG') {
      const { src } = event.target;
      setSource(src);
    }
  }

  return (
    <section className="Gallery">
      <img
        src={source}
        className={source.indexOf(source) !== -1 ? 'selected' : null}
        alt=""
      />
      <div onClick={select}>
        {gallery?.map((photo, index) => {
          const { url, alt } = photo?.image;
          return (
            <img
              key={`gallery-${index}`}
              src={url}
              className={source.indexOf(url) !== -1 ? 'selected' : null}
              alt={alt}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
