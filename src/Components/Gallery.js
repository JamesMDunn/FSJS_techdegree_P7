import React from "react";
import GalleryItem from "./GalleryItem";

const Gallery = props => {
  // display the sets of images for each of the three topic categories
  const results = props.results;
  let photos;

  if (results.length > 0) {
    photos = results.map(image => (
      <GalleryItem
        url={`https://farm${image.farm}.staticflickr.com/${image.server}/${
          image.id
        }_${image.secret}.jpg`}
        key={image.id}
      />
    ));
  }
  return (
    <div className="photo-container">
      <ul>{photos}</ul>
    </div>
  );
};

export default Gallery;
