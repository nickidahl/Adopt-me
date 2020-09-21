import React, { useEffect, useState } from "react";

const Carousel = ({ media }) => {
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setPhotos["http://placecorgi.com/600/600"];

    if (media.length) {
      setPhotos(media.map(({ large }) => large));
    }
  }, [media]);

  function handleIndexClick(event) {
    setActive(parseInt(event.target.dataset.index));
  }

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal"></img>
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={(event) => {
              handleIndexClick(event);
            }}
            data-index={index}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          ></img>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
