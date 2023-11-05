import React, { useState } from "react";
import SocialMedia from "components/SocialMedia/SocialMedia";
import { SocialMediaColor } from "../utility/SharedStyles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import * as S from "./TopProject.styles";

interface topProjectProps {
    image?: string;
    github: string;
    description: string;
    name: string;
    year: string;
}
function TopProject(props: topProjectProps) {
    const [descriptionIsVisible, setDescriptionIsVisible] = useState(false);
    const [nameIsVisible, setNameIsVisible] = useState(false);

    function mouseLeave() {
        setDescriptionIsVisible(false);
        setNameIsVisible(false);
    }
    function mouseEnter() {
        setDescriptionIsVisible(true);
        setNameIsVisible(true);
    }
    return (
        <S.TopProjectContainer
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            data-aos="zoom-in"
            data-aos-duration="2500"
        >

            <S.TopProjectTitle isVisible={nameIsVisible}>{props.name}</S.TopProjectTitle>
            <S.TopProjectYear isVisible={nameIsVisible}>{props.year}</S.TopProjectYear>
            <S.TopProjectContent isVisible={descriptionIsVisible}>
                {props.description}
                {props.github !== "" &&
                    <S.TopProjectButton href={props.github} target="_blank">
                        <div> Visit {props.name}'s Github</div>
                        <SocialMedia
                            color={SocialMediaColor.White}
                            icon={faGithub}
                            link={props.github}
                        />
                    </S.TopProjectButton>
                }
            </S.TopProjectContent>
            <S.TopProjectImageContainer>
                <S.TopProjectImage src={props.image} isVisible={!descriptionIsVisible} />
            </S.TopProjectImageContainer>

        </S.TopProjectContainer>
    );
}

export default React.memo(TopProject);
