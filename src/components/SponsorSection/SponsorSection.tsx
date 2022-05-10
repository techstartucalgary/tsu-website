import SponsorLogo from "components/SponsorLogo";
import { Sponsor, SponsorList } from "./SponsorsInfo";
import * as S from "./SponsorSection.styles";
import Divider from "components/Divider";
import CustomButton from "components/CustomButton";
import { ButtonMode } from "components/CustomButton.styles";

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
        <p>
          Interested in sponsoring us? Reach out at&nbsp;
          <b>
            <a href="mailto:external@techstartucalgary.com">external email</a>
          </b>
          !
        </p>
      </S.SponsorCallToActionDiv>
      <div>
        <S.SponsorButtonDiv>
          <CustomButton
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
