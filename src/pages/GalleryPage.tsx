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
      <div
        style={{ margin: "0 2%" }}
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top">
        <PhotoGallery />
      </div>
    </S.GalleryPage>
  );
};

export default GalleryPage;
