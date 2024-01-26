import axios from 'axios';
import { useEffect, useState } from 'react';
import { PicturesContainer } from './PhotoGallery.styles';

const PhotoGallery = () => {
  const [photosURL, setPhotosURL] = useState([]);// photos will be an array of objects

  useEffect(() => {
    async function getAlbum() {
      const galleryPicsURL = process.env.REACT_APP_PIC_API_URL;
      try {
        if (!galleryPicsURL) {
          console.error('URL is not defined');
          throw new Error('URL is not defined');
        }
        const response = await axios.get(`${galleryPicsURL}/gallery`);
        const { data } = response;
        setPhotosURL(data);
      } catch (error) {
        console.error(`Error fetching images from the server on  ${galleryPicsURL}`, error);
      }
    }

    getAlbum();

  }, []);
  return (
    <PicturesContainer>
      {photosURL.map((photo, index) => (
        <img
          src={photo}
          key={index}
          style={{ width: '100%', height: 'auto', marginBottom: 24, backgroundColor: "white" }}
        />
      ))}
    </PicturesContainer>
  )
};

export default PhotoGallery;

