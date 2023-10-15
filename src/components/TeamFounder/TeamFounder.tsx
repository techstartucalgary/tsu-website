import React, { memo } from "react";
import { useState } from "react";
import Team from "../TeamSection/Team";
import useViewport from "../UseViewport";
import * as S from "../TeamSection/TeamSection.styles";

const Founder = () => {

    return (
        <S.TeamSection>
            {/* Need a title for our founder */}
            <h2 color="white">
                Founder
            </h2>
            
        </S.TeamSection>
    );
}
export default React.memo(Founder);