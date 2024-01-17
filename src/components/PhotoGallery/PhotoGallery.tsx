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
      <h1 style={{ color: 'white' }}>Photos baby</h1>
      <ul>
        {photos.map((photo, index) => (
          <li key={index}>
            <img
              src={photo}
              alt={'photo #${index}'}
              style={{ width: '300px', height: 'auto' }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
};

export default PhotoGallery;
