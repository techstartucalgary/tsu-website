import SponsorLogo from "components/SponsorLogo";
import HoverButton from "../HoverButton/HoverButton";
import { Organization, SponsorList } from "./SponsorsInfo";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import * as S from "./SponsorSection.styles";
import Divider from "components/Divider";

const SponsorSection = () => {
  return (
    <div className="homePage__container">
      <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>
        Our Sponsors
      </h2>
      <Divider />
      <S.SponsorSection>
        {SponsorList.map((sponsor: Organization, index: number) => {
          return (
            <S.SponsorLogoDiv key={sponsor.sponsorLink}>
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
          Special thank you to our industry sponsors, collaboration partners,
          and featured guests. <br />
          Interested? Reach out at&nbsp;
          <b>
            <a href="mailto:external@techstartucalgary.com">
              external@techstartucalgary.com
            </a>
          </b>
          !
        </p>
      </S.SponsorCallToActionDiv>
      <div>
        <S.SponsorButtonDiv>
          <HoverButton
            mode={ButtonMode.DARK}
            link="https://drive.google.com/file/d/1yy5uBqSD0DrG2PsMuXg0en8dV3r-wULJ/view"
            linkIsInternal={false}
            text="Check out our sponsorship package!"
          />
        </S.SponsorButtonDiv>
      </div>
    </div>
  );
};

export default SponsorSection;
