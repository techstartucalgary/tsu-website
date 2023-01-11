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
  pastEvent: boolean;
};

const Event = (props: EventProps) => {
  const textClasses = ["babyHeading", "regularText"];

  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = props.pastEvent ? "fade-left" : "fade-right";

  return (
    <S.Event
      data-aos={fadeDirection}
      data-aos-duration="2000"
      pastEvent={props.pastEvent}
    >
      {props.pastEvent ? (
        <a href={props.link}>
          <S.EventImage
            pastEvent={true}
            src={props.image}
            key={props.key}
            alt={props.title}
            onDragStart={preventDragHandler}
          />
        </a>
      ) : (
        <S.EventImage
          pastEvent={false}
          src={props.image}
          key={props.key}
          alt={props.title}
          onDragStart={preventDragHandler}
        />
      )}

      {!props.pastEvent && (
        <S.EventText>
          <p className="babyHeading babyHeading--bolder">{props.title}</p>
          <p className={textClasses[1]}>{props.description}</p>
          <S.DatetimeButtonDiv>
            <p className={textClasses[1]}>
              {props.date} | {props.time}
            </p>
            <div>
              <HoverButton
                mode={ButtonMode.DARK}
                text={"Check it Out!"}
                link={props.link}
                linkIsInternal={false}
              />
            </div>
          </S.DatetimeButtonDiv>
        </S.EventText>
      )}
    </S.Event>
  );
};

export default Event;
