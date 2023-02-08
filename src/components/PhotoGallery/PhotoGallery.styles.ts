import styled from "styled-components";

export const PhotoGalleryContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-bottom: 20vw;
`;

export const CurrentPhotoContainer = styled.div`
  margin: 5% 2%;
  aspect-ratio: 2 / 1;
  max-width: 1000px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000029;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CurrentPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PhotoThumbnailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1%;
  row-gap: 1%;
  width: 100%;
  max-width: 1000px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Thumbnail = styled.img`
  width: 20vw;
  height: 20vw;

  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  &: hover {
    transform: translateY(-0.25rem);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  @media (max-width: 1000px) {
    width: 45vw;
    height: 45vw;
  }
`;
