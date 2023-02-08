import React, { useState } from "react";
import * as S from "./PhotoGallery.styles";
import { photos } from "./PhotoGalleryList";

const PhotoGallery: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(photos[0]);

  return (
    <S.PhotoGalleryContainer>
      <S.CurrentPhotoContainer>
        <S.CurrentPhoto src={currentPhoto.url} alt={currentPhoto.caption} />
      </S.CurrentPhotoContainer>
      <S.PhotoThumbnailsContainer>
        {photos.map((photo) => (
          <S.Thumbnail
            key={photo.id}
            src={photo.url}
            alt={photo.caption}
            onClick={() => setCurrentPhoto(photo)}
          />
        ))}
      </S.PhotoThumbnailsContainer>
    </S.PhotoGalleryContainer>
  );
};

export default PhotoGallery;
