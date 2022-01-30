import styled, { css } from "styled-components/macro";

export enum SocialMediaColor {
  Green = "Green",
  Gradient = "Gradient",
  Black = "Black",
}

const handleColor = (color: SocialMediaColor) => {
  switch (color) {
    case SocialMediaColor.Black:
      return "black";
    case SocialMediaColor.Green:
      return "var(--primary-green)";
    default:
      return "";
  }
};

const GradientStyles = css`
  background-clip: text;
  background-color: var(--secondary-blue)
  background-image: linear-gradient(
    45deg,
    var(--secondary-lime),
    var(--secondary-blue)
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  display: initial;

  & path {
    fill: url("#customSVGFromIndexDotHTML");
  }
`;

export const SocialMediaIcon = styled.a<{ color: SocialMediaColor }>`
  margin: 0 1em;
  transition: 0.3s ease-in-out;
  display: inline-block;
  color: ${(color) => handleColor(color.color)};

  ${(color) => color.color === SocialMediaColor.Gradient && GradientStyles};

  &: hover {
    transform: translateY(-0.25em);
    box-shadow: 0 0.2em 0.3em -0.4em rgb(177, 173, 173);
  }

  @media (max-width: 400px) {
    margin: 0 0.5em;
  }
`;