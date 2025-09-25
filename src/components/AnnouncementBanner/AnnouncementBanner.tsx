import { Link } from "react-router-dom";
import * as S from "./AnnouncementBanner.styles";

interface AnnouncementBannerProps {
  message: string;
  link?: {
    text: string;
    to: string;
    external?: boolean;
  };
}

const AnnouncementBanner = ({ message, link }: AnnouncementBannerProps) => {
  return (
    <S.AnnouncementContainer>
      {message}
      {link && (
        link.external ? (
          <a href={link.to} target="_blank" rel="noreferrer">{link.text}</a>
        ) : (
          <Link to={link.to}>{link.text}</Link>
        )
      )}
    </S.AnnouncementContainer>
  );
};

export default AnnouncementBanner;
