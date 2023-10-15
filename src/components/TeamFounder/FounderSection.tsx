import React, { memo } from "react";
import useViewport from "../UseViewport";
import * as S from "../TeamSection/TeamSection.styles";
import { founder } from "./FounderInformation";
import Founder from "./Founder";


const FounderSection = () => {

    // set defaultView flag according to screen width cutoff value
    const { width } = useViewport(); // get screen width
    const defaultView = width > 600 ? true : false;

    return (
        <S.TeamSection>
            {/* I want founder to have a smiliar layout to the Team component,*/}
            <Founder
                founderInfo={founder}
                desktopView={defaultView}
            />
        </S.TeamSection>
    );
}
export default React.memo(FounderSection);