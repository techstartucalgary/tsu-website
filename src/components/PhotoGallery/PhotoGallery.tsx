import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { PicturesContainer } from "./PhotoGallery.styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Loading from "components/Loading";
import { motion } from "framer-motion";
import Blobbie from "components/Blobbie";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import * as S from "../../pages/GalleryPage.styles"

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
    <>
      {
        photosURL.length ===0 ?
        (
          <Loading />
        ):
        (
        <>
          <S.GalleryPageHeader>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Capturing the Memories: A Look Inside Tech Start! <br /> Interested in
              joining us?
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <HoverButton
                mode={ButtonMode.GRADIENT}
                glowOnHover={true}
                link="/apply"
                text={"Apply Now"}
                linkIsInternal={true}
              />
            </motion.div>
            </S.GalleryPageHeader>
            <PicturesContainer>
                  {photosURL.map((photo, index) => (
                    <LazyLoadImage
                      height="auto"
                      key={index}
                      src={photo}
                      width="100%" />
                  ))}
            </PicturesContainer> 
        </>
        )
      }
      </>
  );
};

export default PhotoGallery;
