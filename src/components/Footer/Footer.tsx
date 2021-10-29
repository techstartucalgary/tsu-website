import "./Footer.css";
import "../../App.css";
import SocialMedia, { SocialMediaColor } from "../SocialMedia/SocialMedia";
import HoverButton from "../HoverButton/HoverButton";
import {
  faFacebook,
  faInstagram,
  faDiscord,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <div className="Footer">
    <div className="hoverButton">
      <HoverButton
        link="http://eepurl.com/hnusUP"
        text="Join our mailing list!"
      />
    </div>

    <div className="SocialMediaSection">
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
    </div>
    <p className="Copyright">
      © {new Date().getFullYear()} Tech Start UCalgary
    </p>
  </div>
);

export default Footer;
