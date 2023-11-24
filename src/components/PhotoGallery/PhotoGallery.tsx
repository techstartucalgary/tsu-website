
// WIP: Pending oAuth verification from Google APIs 
// Fow now we're using a static folder for our gallery images

import ImageList from '@mui/material/ImageList';
import useViewport from 'components/UseViewport';
import { ImageListItem } from "@mui/material";
import { GalleryImage, GalleryImages } from "./PhotoInformation";
import { shuffleArray } from 'utility/Helpers';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const images = shuffleArray(GalleryImages);

const API_KEY = 'AIzaSyBho8ig2yKNuA7qJlIDgjjVklzVmaFXWsw';

const endpoint = 'https://photoslibrary.googleapis.com/v1/albums';

const PhotoGallery = () => {
  const googleAPI = useRef({ isReady: false });
  const [isReady, setReady] = useState(false);
  const [images, setImages] = useState(GalleryImages);

  useEffect(() => {
    const script = document.createElement('script');

    // apis.google.com / js / api.js

    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.onload = () => {
      setReady(true)
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {

    // APikey = AIzaSyBho8ig2yKNuA7qJlIDgjjVklzVmaFXWsw
    // gapi.client.init({
    //   apiKey: "AIzaSyBho8ig2yKNuA7qJlIDgjjVklzVmaFXWsw",
    //   clientId: "881622108956-4hdip7te04f802jm4t54696v1f1ti9d0.apps.googleusercontent.com",
    //   discoveryDocs: ['https://photoslibrary.googleapis.com/$discovery/rest?version=v1'],
    //   scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
    // });
    if (isReady) {
      const start = () => {
        gapi.auth2.init({
          client_id: "881622108956-r53m6cfoolr0c1kaidu4ib9eqkv3q3kk.apps.googleusercontent.com",
          // apiKey: "AIzaSyBho8ig2yKNuA7qJlIDgjjVklzVmaFXWsw",
          // clientId: "881622108956-4hdip7te04f802jm4t54696v1f1ti9d0.apps.googleusercontent.com",
          // discoveryDocs: ['https://photoslibrary.googleapis.com/$discovery/rest?version=v1'],
          // scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
        }).then(function () {
          console.log('hiii')
          // // 3. Initialize and make the API request.

          // return gapi.client.request({
          //   path: 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
          // })
        }).then(function (response: any) {
          console.log(response);
        }, function (reason: any) {
          console.log(reason)
          // console.log('Error: ' + reason.result.error.message);
        });
      }

      gapi.load('auth2', start);
      // console.log(gapi.load())
    }
  }, [isReady])

  // useEffect(() => {
  //   console.log("hiii")
  //   // const clientID = '881622108956-r53m6cfoolr0c1kaidu4ib9eqkv3q3kk.apps.googleusercontent.com';
  //   // let apiKey = 'AIzaSyDpXsNzgNPKqTsBi6c9-dLCWoc1J-Ps58U';
  //   // apiKey = "AIzaSyBho8ig2yKNuA7qJlIDgjjVklzVmaFXWsw";
  //   // const albumId = 'SkVei5N56poqTh8g8';

  //   // fetchImagesFromAlbum(apiKey, albumId);

  //   fetch(endpoint, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${API_KEY}`
  //     }
  //   }).then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       // Handle the response data
  //       if (data.albums && data.albums.length > 0) {
  //         data.albums.forEach((album: any) => {
  //           console.log(album.title);
  //         });
  //       } else {
  //         console.log('No albums found.');
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching albums:', error);
  //     });
  // }, []);

  // const fetchImagesFromAlbum = async (apiKey: string, albumId: string) => {
  //   try {
  //     const response = await axios.get(`https://photos.app.goo.gl/weUSkUpoxSRmALmo7?Api_key=${apiKey}`);
  //     console.log(response.data)
  //     // eslint-disable-next-line
  //     const images = response.data.mediaItems.map((item: any) => item.baseUrl);
  //     setImages(images);
  //   } catch (error) {
  //     console.error('Error fetching images from Google Photos:', error);
  //   }
  // };


  // set defaultView flag according to screen width cutoff value
  const { width } = useViewport(); // get screen width
  const cols = width > 600 ? 3 : 2;

  return (
    <>
      <h1>Please work</h1>
      {/* <ImageList variant="woven" cols={cols} gap={10}>
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
</ImageList> */}
    </>


  );
};

export default PhotoGallery;

/*
WIP: Pending oAuth verification from Google APIs
Fow now we're using a static folder for our gallery images
*/
// import ImageList from '@mui/material/ImageList';
// import useViewport from 'components/UseViewport';
// import { ImageListItem } from "@mui/material";
// import { GalleryImage, GalleryImages } from "./PhotoInformation";
// import { shuffleArray } from 'utility/Helpers';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { loadGapiInsideDOM } from 'gapi-script';


// const PhotoGallery = () => {
//   const [photos, SetPhotos] = useState([]);// photos will be an array of objects

//   const getGooglePhotos = async () => {
//     const gapi = await loadGapiInsideDOM();
//   }

//   useEffect(() => {
//     getGooglePhotos()
//   }, []);
// };

// export default PhotoGallery;
