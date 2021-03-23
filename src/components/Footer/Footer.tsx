import './Footer.css'
import SocialMedia from '../SocialMedia/SocialMedia';
import SubscribeButton from './SubscribeButton/SubscribeButton';

import {
    faFacebook,
    faInstagram,
    faDiscord,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => (
    <div className="Footer">
        <SubscribeButton />
        <div className="SocialMediaSection">
            <SocialMedia
                footer={true}
                icon={faFacebook}
                link="https://www.facebook.com/TechStartUCalgary/" />

            <SocialMedia
                footer={true}
                icon={faInstagram}
                link="https://www.instagram.com/techstartucalgary/" />

            <SocialMedia
                footer={true}
                icon={faDiscord}
                link="https://discord.gg/Sxj5QrxRPk" />

            <SocialMedia
                footer={true}
                icon={faLinkedin}
                link="https://www.linkedin.com/company/tech-start-ucalgary" />
        </div>
        <p className="Copyright">UofC TechStart 2021</p>
    </div>
);

export default Footer;