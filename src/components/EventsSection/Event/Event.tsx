import * as S from "./Event.styles";
import HoverButton from "components/HoverButton/HoverButton";
import { ButtonMode } from "components/HoverButton/HoverButton.styles";

type EventProps = {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  link: string;
};

const Event = (props: EventProps) => {
  const textClasses = ["babyHeading", "regularText"];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const preventDragHandler = (e: any) => e.preventDefault();

  const fadeDirection = "fade-right";

  return (
    <S.Event data-aos={fadeDirection} data-aos-duration="2000">
      <S.EventImage
        src={props.image}
        alt={props.title}
        onDragStart={preventDragHandler}
      />

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
    </S.Event>
  );
};

export default Event;
