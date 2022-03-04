import SponsorLogo from "components/SponsorLogo";
import HoverButton from "../HoverButton/HoverButton";
import { Sponsor, SponsorList } from "./SponsorsInfo";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import * as S from "./SponsorSection.styles";
import Divider from "components/Divider";

const SponsorSection = () => {
  return (
    <div className="homePage__container">
      <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>Sponsors</h2>
      <Divider />
      <S.SponsorSection>
        {SponsorList.map((sponsor: Sponsor) => {
          return (
            <S.SponsorLogoDiv>
              <SponsorLogo
                sponsorLink={sponsor.sponsorLink}
                sponsorImage={sponsor.sponsorImage}
              />
            </S.SponsorLogoDiv>
          );
        })}
      </S.SponsorSection>

      <S.SponsorCallToActionDiv>
        <p className="regularText regularText--black">
          Interested in sponsoring us? Reach out via our&nbsp;
          <a href="external@techstartucalgary.com" target="_blank">
            external email
          </a>
          !
        </p>
      </S.SponsorCallToActionDiv>
      <div>
        <S.SponsorButtonDiv>
          <HoverButton
            mode={ButtonMode.DARK}
            link="https://drive.google.com/file/d/1Es9AvtbGnGbvhsyh1Vp35qr8DptDiSMv/view"
            linkIsInternal={false}
            text="Check out our sponsorship package!"
          />
        </S.SponsorButtonDiv>
      </div>
    </div>
  );
};

export default SponsorSection;
