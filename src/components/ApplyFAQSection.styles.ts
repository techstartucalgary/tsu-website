import styled from "styled-components/macro";

export const FAQSection = styled.article`
  margin: 40px 0;
`;

export const FAQQuestion = styled.h2`
  font-size: clamp(24px, calc(0.15vw + 24px), 30px);
`;

export const FAQAnswer = styled.p`
  font-size: clamp(16px, calc(0.15vw + 16px), 22px);
`;
