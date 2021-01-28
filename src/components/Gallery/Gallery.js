import React, { useState } from "react";
import "./gallery-styles/Gallery.css";
import WindowImage from "./WindowImage";

function Gallery() {
  const [activeImgId, setActiveImgId] = useState();
  const pictures = [
    { id: 0, url: "https://picsum.photos/400/300" },
    { id: 1, url: "https://picsum.photos/400/300" },
    { id: 2, url: "https://picsum.photos/400/300" },
    { id: 3, url: "https://picsum.photos/400/300" },
    { id: 4, url: "https://picsum.photos/400/300" },
    { id: 5, url: "https://picsum.photos/400/300" },
    { id: 6, url: "https://picsum.photos/400/300" },
    { id: 7, url: "https://picsum.photos/400/300" },
    { id: 8, url: "https://picsum.photos/400/300" },
    { id: 9, url: "https://picsum.photos/400/300" },
    { id: 10, url: "https://picsum.photos/400/300" },
    { id: 11, url: "https://picsum.photos/400/300" },
    { id: 12, url: "https://picsum.photos/400/300" },
  ];
  const onPhotoClick = (e) => {
    setActiveImgId(e.target.id);
  };
  const deselectPhoto = () => {
    setActiveImgId(null);
  };
  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1>Galeria</h1>
      </div>
      <div className="gallery-content">
        {pictures &&
          pictures.map((picture) => (
            <div className="img-container" key={picture.id}>
              <img
                src={picture.url}
                alt="random"
                onClick={onPhotoClick}
                id={picture.id}
              />
            </div>
          ))}
      </div>
      {activeImgId && (
        <WindowImage
          activeImg={pictures[activeImgId]}
          deselectPhoto={deselectPhoto}
        />
      )}
    </div>
  );
}

export default Gallery;
