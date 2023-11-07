import React from "react";
import HoverButton from "components/HoverButton/HoverButton";
import * as S from "./FeaturedProject.styles";
import { ButtonMode } from "./HoverButton/HoverButton.styles";

interface featuredProjectProps {
    image?: string;
    github: string;
    description: string;
    name: string;
    year: string;
}
function FeaturedProject(props: featuredProjectProps) {
    return (
        <S.FeaturedProjectContainer>
            <S.FeaturedProjectTitle>{props.name}</S.FeaturedProjectTitle>
            <S.FeaturedProjectYear>{props.year}</S.FeaturedProjectYear>
            <S.FeaturedProjectContent >
                {props.description}
                {props.github !== "" &&
                    <div style={{ marginTop: '20px' }}>
                        <HoverButton
                            mode={ButtonMode.DARK}
                            link={props.github}
                            linkIsInternal={false}
                            text={'Visit ' + props.name + "'s Github \u2192"}
                        />
                    </div>
                }
            </S.FeaturedProjectContent>
            <S.FeaturedProjectImageContainer>
                <S.FeaturedProjectImage src={props.image} />
            </S.FeaturedProjectImageContainer>

        </S.FeaturedProjectContainer>
    );
}

export default React.memo(FeaturedProject);
