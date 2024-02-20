import React from "react";
import HoverButton from "components/HoverButton/HoverButton";
import * as S from "./FeaturedProject.styles";
import { ButtonMode } from "./HoverButton/HoverButton.styles";

interface featuredProjectProps {
    image: string;
    github: string;
    description: string;
    name: string;
    year: string;
    videoEmbedID: string;
    autoplay: boolean;
}
function FeaturedProject(props: featuredProjectProps) {
    return (
        <S.FeaturedProjectContainer>
            <S.FeaturedProjectTitle>{props.name}</S.FeaturedProjectTitle>
            <S.FeaturedProjectYear>{props.year}</S.FeaturedProjectYear>
            <S.FeaturedProjectContent >
                {props.description}
                {<div style={{ marginTop: '20px' }}>
                    <HoverButton
                        mode={ButtonMode.DARK}
                        link={props.github}
                        linkIsInternal={false}
                        text={'Visit ' + props.name + "'s Github \u2192"}
                    />
                </div>
                }
            </S.FeaturedProjectContent>
            {props.videoEmbedID ? (
                <S.FeaturedProjectMediaContainer>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${props.videoEmbedID}&autoplay=${props.autoplay ? 1 : 0}&mute=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    >
                    </iframe>

                </S.FeaturedProjectMediaContainer>
            ) : (
                <S.FeaturedProjectMediaContainer>
                    <S.FeaturedProjectImage src={props.image} />
                </S.FeaturedProjectMediaContainer>
            )}

        </S.FeaturedProjectContainer>
    );
}

export default React.memo(FeaturedProject);
