import axios from 'axios';
import { useEffect, useState } from 'react';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);// photos will be an array of objects

  useEffect(() => {
    async function getAlbum() {
      try {
        const response = await axios.get("https://tsu-server.vercel.app/api/gallery");
        const { data } = response;
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching images from the server on localHost 5000:', error);
      }
    }

    getAlbum();

  }, []);
  return (
    <div>
      <div style={{ columnCount: 3, columnGap: 24, maxWidth: 1024, margin: 'auto' }}>
        {photos.map((photo) => (
          <img
            src={photo}
            alt={'photo #${index}'}
            style={{ width: '100%', height: 'auto', marginBottom: 24 }}
          />
        ))}
      </div>
    </div>
  )
};

export default PhotoGallery;
