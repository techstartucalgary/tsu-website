import * as S from "./Event.styles";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

type EventProps = {
  key: number;
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
  linkTitleOverride?: string;
  pastEvent: boolean;
};

const Event = (props: EventProps) => {
  const textClasses = ["babyHeading", "regularText"];

  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = props.pastEvent ? "fade-left" : "fade-right";

  const linkButtonText = props.linkTitleOverride || "Register";

  return (
    <S.Event data-aos={fadeDirection} data-aos-duration="2000">
      {props.pastEvent ? (
        <S.EventImage
          imageLeft={true}
          src={props.image}
          key={props.key}
          alt={props.title}
          onDragStart={preventDragHandler}
        />
      ) : (
        <S.EventImage
          imageLeft={false}
          src={props.image}
          key={props.key}
          alt={props.title}
          onDragStart={preventDragHandler}
        />
      )}

      <S.EventText>
        <p className="babyHeading babyHeading--bolder">{props.title}</p>
        <p className={textClasses[1]}>{props.description}</p>

        {!props.pastEvent && (
          <S.DatetimeButtonDiv>
            <p className={textClasses[1]}>
              {props.date} | {props.time}
            </p>
            <HoverButton
              mode={ButtonMode.TRANSPARENT}
              text={linkButtonText}
              link={props.link}
              linkIsInternal={false}
            />
          </S.DatetimeButtonDiv>
        )}
      </S.EventText>
    </S.Event>
  );
};

export default Event;
