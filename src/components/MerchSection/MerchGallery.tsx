import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MerchContainer, Image } from "./MerchGallery.styles";

const MerchGallery = () => {
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
    <MerchContainer>
      {photosURL.map((photo, index) => (
        <Image src={photo} key={index} />
      ))}
    </MerchContainer>
  );
};

export default MerchGallery;
