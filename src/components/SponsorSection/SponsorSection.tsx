import SponsorLogo from "../SponsorLogo";
import sponsorLogoHunterHub from "images/sponsor-logo-hunter-hub.png";
import sponsorLogoArcurve from "images/sponsor-logo-arcurve.png";
import sponsorLogoUnity from "images/sponsor-logo-unity.png";
import sponsorLogoMicrosoft from "images/sponsor-logo-microsoft.png";
import "../../App.css";
import HoverButton from "../HoverButton/HoverButton";
import "./SponsorSection.css";

const SponsorSection = () => {
  return (
    <div className="homePage__container">
      <h2 className={"chonkyHeading"}>Sponsors</h2>

      <div className="SponsorSection">
        <div className="SponsorLogo">
          <SponsorLogo
            sponsorLink="https://www.arcurve.com/"
            sponsorImage={sponsorLogoArcurve}
          />
        </div>
        <div className="SponsorLogo">
          <SponsorLogo
            sponsorLink="https://www.ucalgary.ca/hunter-hub"
            sponsorImage={sponsorLogoHunterHub}
          />
        </div>
        <div className="SponsorLogo">
          <SponsorLogo
            sponsorLink="https://www.microsoft.com/"
            sponsorImage={sponsorLogoMicrosoft}
          />
        </div>
        <div className="SponsorLogo">
          <SponsorLogo
            sponsorLink="https://unity.com/"
            sponsorImage={sponsorLogoUnity}
          />
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <HoverButton
          darkMode={true}
          link="https://drive.google.com/file/d/1Es9AvtbGnGbvhsyh1Vp35qr8DptDiSMv/view"
          linkIsInternal={false}
          text="Interested in sponsoring us? Check out our sponsorship package!"
        />
      </div>
    </div>
  );
};

export default SponsorSection;
