import * as S from "./Footer.styles";
import "../../App.css";
import SocialMedia, { SocialMediaColor } from "../SocialMedia/SocialMedia";
import HoverButton from "../HoverButton/HoverButton";
import {
  faFacebook,
  faInstagram,
  faDiscord,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

const Footer = () => (
  <S.Footer>
    <S.HoverButtonDiv>
      <HoverButton
        mode={ButtonMode.TRANSPARENT}
        link="http://eepurl.com/hnusUP"
        linkIsInternal={false}
        text="Join our mailing list!"
      />
    </S.HoverButtonDiv>

    <S.SocialMediaSection>
      <SocialMedia
        color={SocialMediaColor.Black}
        icon={faFacebook}
        link="https://www.facebook.com/TechStartUCalgary/"
      />

      <SocialMedia
        color={SocialMediaColor.Black}
        icon={faInstagram}
        link="https://www.instagram.com/techstartucalgary/"
      />

      <SocialMedia
        color={SocialMediaColor.Black}
        icon={faDiscord}
        link="https://discord.gg/Sxj5QrxRPk"
      />

      <SocialMedia
        color={SocialMediaColor.Black}
        icon={faLinkedin}
        link="https://www.linkedin.com/company/tech-start-ucalgary"
      />
      <SocialMedia
        color={SocialMediaColor.Black}
        icon={faYoutube}
        link="https://www.youtube.com/channel/UCIg1JPlWSXSwIdvqHKGiX9g"
      />
    </S.SocialMediaSection>
    <S.Copyright>© {new Date().getFullYear()} Tech Start UCalgary</S.Copyright>
  </S.Footer>
);

export default Footer;
