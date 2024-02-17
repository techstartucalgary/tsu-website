import Blobbie from "components/Blobbie";
import PhotoGallery from "components/PhotoGallery/PhotoGallery";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import { motion } from "framer-motion";
import * as S from "./GalleryPage.styles";

const GalleryPage = () => {
  return (
    <S.GalleryPage id="galleryPageTop">
      <Blobbie
        id={2}
        width={300}
        transform="translate(80vw, 0vw)"
        edge={true}
      />
      <Blobbie
        id={8}
        width={250}
        transform="translate(-10vw, 10vw)"
        edge={false}
      />
      <S.GalleryPageHeader>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h1>

      </S.GalleryPageHeader>

        <PhotoGallery />
    </S.GalleryPage>
  );
};

export default GalleryPage;
