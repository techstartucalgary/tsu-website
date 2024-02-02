import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { PicturesContainer, Image } from "./PhotoGallery.styles";

const PhotoGallery = () => {
  const [photosURL, setPhotosURL] = useState<string[]>([]); // photos will be an array of objects
  //memoize a getAlbum to prevent unnecessary re-renders.
  const getAlbum = useCallback(async () => {
    const galleryPicsURL = process.env.REACT_APP_PIC_API_URL;
    try {
      if (!galleryPicsURL) {
        throw new Error("URL is not defined");
      }
      const { data } = await axios.get<string[]>(`${galleryPicsURL}/gallery`);

      if (!data.length) {
        throw new Error("No images found");
      }
      setPhotosURL(data);
    } catch (error) {
      console.error(
        `Error fetching images from the server on  ${galleryPicsURL}`,
        error
      );
    }
  }, []);

  useEffect(() => {
    getAlbum();
  }, [getAlbum]);
  return (
    <PicturesContainer>
      {photosURL.map((photo, index) => (
        <Image src={photo} key={index} />
      ))}
    </PicturesContainer>
  );
};

export default PhotoGallery;
