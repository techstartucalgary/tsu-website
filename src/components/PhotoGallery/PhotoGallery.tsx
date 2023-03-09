import { ReactPictureGrid } from "react-picture-grid";
import { galleryPhotos } from "./PhotoGalleryList";

const PhotoGallery = () => (
  <ReactPictureGrid data={galleryPhotos} showTitle gap={10} />
);

export default PhotoGallery;
