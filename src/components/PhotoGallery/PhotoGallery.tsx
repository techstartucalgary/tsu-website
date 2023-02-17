import React from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const PhotoGallery = () => {
  const [images, setImages] = React.useState<any[]>([]);

  React.useEffect(() => {
    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948" // TODO add our own Google Photos API
      );
      if (response.data && response.data.length > 0) {
        console.log(response.data);
        setImages(
          response.data.map((url: string) => ({
            key: url,
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
  }, []);

  return images ? (
    <ImageGallery items={images} infinite={true} lazyLoad={true} />
  ) : null;
};

export default PhotoGallery;
