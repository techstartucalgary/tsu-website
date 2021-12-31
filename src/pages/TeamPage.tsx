import Blobbie from "components/Blobbie";
import Divider from "components/Divider";
import TeamSection from "components/TeamSection/TeamSection";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";
import * as S from "./TeamPage.styles";

const TeamPage = () => {
  return (
    <S.TeamPage id="teamPageTop">
      <Blobbie
        id={2}
        width={300}
        transform="translate(80vw, 0vw)"
        edge={true}
      />
      <Blobbie
        id={8}
        width={250}
        transform="translate(-10vw, 10vw)"
        edge={false}
      />
      <S.TeamPageHeader>
        <h1>Our Team</h1>
        <p>
          Tech Start is only possible thanks to our team of talented, passionate
          leaders. Interested in joining us?
        </p>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <HoverButton
            mode={ButtonMode.GRADIENT}
            link="/apply"
            text={"Apply Now"}
            linkIsInternal={true}
          />
        </div>
      </S.TeamPageHeader>
      <TeamSection />
    </S.TeamPage>
  );
};

export default TeamPage;
