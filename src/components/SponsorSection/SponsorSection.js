//import 'SponsorSection.css';
import SponsorLogo from "../SponsorLogo";
import sponsorLogoHunterHub from "images/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsor-logo-arcurve.png";
import sponsorLogoUnity from "images/sponsor-logo-unity.png";
import sponsorLogoMicrosoft from "images/sponsor-logo-microsoft.png";

const SponsorSection = () => (
    <div className="homePage__container">
        <h2 className="homePage__containerTitle">Sponsors</h2>
        <div className="homePage__split">
            <SponsorLogo sponsorLink="https://www.arcurve.com/" sponsorImage={sponsorLogoArcurve} />
            <SponsorLogo sponsorLink="https://www.ucalgary.ca/hunter-hub" sponsorImage={sponsorLogoHunterHub} />
            <SponsorLogo sponsorLink="https://unity.com/" sponsorImage={sponsorLogoUnity} />
            <SponsorLogo sponsorLink="https://www.microsoft.com/" sponsorImage={sponsorLogoMicrosoft} />
        </div>
        <div>
            <a href="#" id="homePage__sponsorPackage">
                Interested in sponsoring us? Check out our sponsorship package.
    </a>
        </div>
    </div>
);

export default SponsorSection;