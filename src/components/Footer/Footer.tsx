import * as S from "./Footer.styles";
import "../../App.css";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "../../utility/SharedStyles";
import HoverButton from "components/HoverButton/HoverButton";
import {
  faInstagram,
  faDiscord,
  faLinkedin,
  faYoutube,
  faGithub,
  faTiktok,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

const Footer = () => (
  <S.Footer>
    <S.HoverButtonDiv>
      <HoverButton
        mode={ButtonMode.GRADIENT}
        link="http://eepurl.com/hnusUP"
        linkIsInternal={false}
        text="Join our mailing list!"
      />
    </S.HoverButtonDiv>

    <S.SocialMediaSection>
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faInstagram}
        link="https://www.instagram.com/techstartucalgary/"
      />

      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faDiscord}
        link="https://discord.gg/Sxj5QrxRPk"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faGithub}
        link="https://github.com/techstartucalgary"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faLinkedin}
        link="https://www.linkedin.com/company/tech-start-ucalgary"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faYoutube}
        link="https://www.youtube.com/channel/UCIg1JPlWSXSwIdvqHKGiX9g"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faTiktok}
        link="https://www.tiktok.com/@techstartuofc"
      />
      <SocialMedia
        color={SocialMediaColor.Gradient}
        icon={faReddit}
        link="https://www.reddit.com/user/TechStartUCalgary"
      />
    </S.SocialMediaSection>
    <S.Copyright>© {new Date().getFullYear()} Tech Start UCalgary</S.Copyright>
  </S.Footer>
);

export default Footer;
