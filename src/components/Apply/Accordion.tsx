import React from "react";
import * as S from "./Accordion.styles";

type AccordionProps = {
  title: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  description: string;
};

const Accordion = (props: AccordionProps) => {
  return (
    <S.Accordion>
      <S.AccordionHeading
        onClick={() =>
          props.active === props.title
            ? props.setActive("")
            : props.setActive(props.title)
        }
      >
        <S.AccordionContainer>
          <p>{props.title}</p>
          <span>{props.active === props.title ? "-" : "+"}</span>
        </S.AccordionContainer>
      </S.AccordionHeading>
      <S.AccordionContent contentVisible={props.active === props.title}>
        <S.HTML_Container>
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
        </S.HTML_Container>
      </S.AccordionContent>
    </S.Accordion>
  );
};

export default Accordion;
