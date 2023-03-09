import React from "react";
import axios from "axios";
import Gallery from "react-photo-gallery-react17";
import { shuffleArray } from "utility/Helpers";

const PhotoGallery = () => {
  const [images, setImages] = React.useState<any[]>([]);

  async function fetchImages() {
    let response = await axios.get(
      "https://google-photos-album-demo2.glitch.me/SkVei5N56poqTh8g8"
    );
    console.log(response.data);
    if (response.data && response.data.length > 0) {
      const shuffledResponseData = shuffleArray(response.data);
      setImages(
        shuffledResponseData.map((url: string) => ({
          src: url,
          width: 4,
          height: 3,
        }))
      );
    }
  }

  React.useEffect(() => {
    fetchImages();
  }, []);

  return images ? <Gallery photos={images} /> : null;
};

export default PhotoGallery;
