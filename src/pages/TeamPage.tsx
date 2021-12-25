import { useState } from "react";
import Blobbie from "components/Blobbie";
import Divider from "components/Divider";
import TeamSection from "components/TeamSection/TeamSection";
import * as S from "./TeamPage.styles";

const TeamPage = () => {
  return (
    <S.HtmlDiv>
      <S.TeamPage id="teamPageTop">
        <Blobbie
          id={2}
          width={300}
          transform="translate(80vw, 10%)"
          edge={true}
        />
        <Blobbie
          id={8}
          width={250}
          transform="translate(-10vw, 10vw)"
          edge={false}
        />
        <Blobbie
          id={7}
          width={350}
          transform="translate(-10vw, 80vw)"
          edge={false}
        />
        <Blobbie
          id={5}
          width={250}
          transform="translate(90vw, 80vw)"
          edge={false}
        />
        <TeamSection />
      </S.TeamPage>
    </S.HtmlDiv>
  );
};

export default TeamPage;
