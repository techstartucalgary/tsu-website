import * as S from "./IndustryPage.styles";
import SponsorLogo from "components/SponsorLogo";
import {
  CollabList,
  GuestList,
  Organization,
  SponsorList,
} from "../components/SponsorSection/SponsorsInfo";
import Divider from "components/Divider";
import { motion } from "framer-motion";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import HoverButton from "components/HoverButton/HoverButton";

const IndustryPage = () => {
  return (
    <div className="homePage">
      <S.IndustryPageHeader>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Industry
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Special thank you to our industry sponsors, collaboration partners,
          and featured guests. Interested?
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <HoverButton
            mode={ButtonMode.GRADIENT}
            glowOnHover={true}
            link="mailto:external@techstartucalgary.com"
            text={"Let's Talk!"}
            linkIsInternal={false}
          />
        </motion.div>
      </S.IndustryPageHeader>
      <section
        className="homePage__section homePage__section--sponsors"
        id="industryPageTop"
      >
        <div className="homePage__container">
          <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>
            Our Sponsors
          </h2>
          <Divider />
          <S.SponsorSection>
            {SponsorList.map((sponsor: Organization) => {
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
          <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>
            Our Collabs
          </h2>
          <Divider />
          <S.SponsorSection>
            {CollabList.map((partner: Organization) => {
              return (
                <S.SponsorLogoDiv>
                  <SponsorLogo
                    sponsorLink={partner.sponsorLink}
                    sponsorImage={partner.sponsorImage}
                  />
                </S.SponsorLogoDiv>
              );
            })}
          </S.SponsorSection>
          <h2 className={"chonkyHeading chonkyHeading--lessMargin"}>
            Our Guests
          </h2>
          <Divider />
          <S.SponsorSection>
            {GuestList.map((guest: Organization) => {
              return (
                <S.SponsorLogoDiv>
                  <SponsorLogo
                    sponsorLink={guest.sponsorLink}
                    sponsorImage={guest.sponsorImage}
                  />
                </S.SponsorLogoDiv>
              );
            })}
          </S.SponsorSection>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
