/*
WIP: Pending oAuth verification from Google APIs 
Fow now we're using a static folder for our gallery images
*/
import ImageList from '@mui/material/ImageList';
import useViewport from 'components/UseViewport';
import { ImageListItem } from "@mui/material";
import { GalleryImage, GalleryImages } from "./PhotoInformation";
import { shuffleArray } from 'utility/Helpers';

const images = shuffleArray(GalleryImages);

const PhotoGallery = () => {
  /*
 const [images, setImages] = useState(GalleryImages);

 useEffect(() => {
   // const clientID = '881622108956-r53m6cfoolr0c1kaidu4ib9eqkv3q3kk.apps.googleusercontent.com';
   // const apiKey = 'AIzaSyDpXsNzgNPKqTsBi6c9-dLCWoc1J-Ps58U';
   // const albumId = 'SkVei5N56poqTh8g8';

   // fetchImagesFromAlbum(apiKey, albumId);

 }, []);

 const fetchImagesFromAlbum = async (apiKey: string, albumId: string) => {
   try {
     const response = await axios.get(
       `https://photoslibrary.googleapis.com/v1/mediaItems:search?albumId=${albumId}`,
       {
         headers: {
           Authorization: `Bearer ${apiKey}`,
         },
       }
     );
     // eslint-disable-next-line
     const images = response.data.mediaItems.map((item: any) => item.baseUrl);
     setImages(images);
   } catch (error) {
     console.error('Error fetching images from Google Photos:', error);
   }
 };
 */

  // set defaultView flag according to screen width cutoff value
  const { width } = useViewport(); // get screen width
  const cols = width > 600 ? 3 : 2;

  return (
    <ImageList variant="woven" cols={cols} gap={10}>
      {images.map((image: GalleryImage) => (
        <ImageListItem key={image.id}>
          <img
            src={`${image.src}?w=248&fit=crop&auto=format`}
            srcSet={`${image.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={image.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotoGallery;
