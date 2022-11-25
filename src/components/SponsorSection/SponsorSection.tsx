import SponsorLogo from "components/SponsorLogo";
import HoverButton from "../HoverButton/HoverButton";
import { Sponsor, SponsorList } from "./SponsorsInfo";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import * as S from "./SponsorSection.styles";
import Divider from "components/Divider";

const SponsorSection = () => {
  return (
    <div className="homePage__container">
      <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>
        Sponsors and Employers
      </h2>
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
            link="https://drive.google.com/file/d/1jWvy6qz8WgXZLGQZGX5NvQTQyTcE-q9W/view?usp=share_link"
            linkIsInternal={false}
            text="Check out our sponsorship package!"
          />
        </S.SponsorButtonDiv>
      </div>
    </div>
  );
};

export default SponsorSection;
