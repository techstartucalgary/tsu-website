import axios from 'axios';
import { useEffect, useState } from 'react';

const PhotoGallery = () => {
  const [photosURL, setPhotosURL] = useState([]);// photos will be an array of objects

  useEffect(() => {
    async function getAlbum() {
      const galleryPicsURL = process.env.REACT_APP_PIC_API_URL;
      try {
        if (!galleryPicsURL) {
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
    <div>
      <div style={{ columnCount: 3, columnGap: 24, maxWidth: 1024, margin: 'auto' }}>
        {photosURL.map((photo, index) => (
          <img
            src={photo}
            key={index}
            style={{ width: '100%', height: 'auto', marginBottom: 24, backgroundColor: "white" }}
          />
        ))}
      </div>
    </div>
  )
};

export default PhotoGallery;

