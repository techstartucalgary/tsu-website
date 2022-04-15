import styled from "styled-components/macro";

interface AccordionProps {
  contentVisible: boolean;
}

const containerCSS = `
  display: flex;
  justify-content: left;
  width: 100%;
  margin: auto;
`;

export const AccordionContainer = styled.div`
  ${containerCSS};

  & > p {
    font-size: clamp(18px, calc(0.25vw + 18px), 22px);
    font-weight: 520;
    color: white;
    margin: 0;
    padding-right: 2vw;
    @media (max-width: 850px) {
      padding-right: 6vw;
    }
  }

  & > span {
    font-size: 27px;
    position: absolute;
    transform: translateY(-6.5px);
    right: 8%;
    color: var(--primary-green, rgb(106, 235, 80));
    text-shadow: rgb(74, 241, 8);

    @media (max-width: 850px) {
      right: 11vw;
    }
  }
`;

export const Accordion = styled.div`
  width: 100%;
  border-bottom: 0.5px solid rgb(148, 148, 148);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const AccordionHeading = styled.div`
  display: flex;
  justify-content: left;
  padding: 12px 0;
  cursor: pointer;
`;

export const AccordionContent = styled.div<AccordionProps>`
  max-height: ${(props) => (props.contentVisible ? "120vh" : 0)};
  opacity: ${(props) => (props.contentVisible ? 1 : 0)};

  display: flex;
  overflow: hidden;
  transition: all 0.8s ease-in-out;
  transition-delay: 0s;

  & li {
    margin-left: 10px;
  }
`;

export const HTML_Container = styled.div`
  ${containerCSS};
  color: #cfcfcf;
  margin: 0 15px 30px 10px;
  font-size: clamp(12px, calc(0.2vw + 12px), 16px);
  line-height: 23px;
  font-weight: 400;
`;
