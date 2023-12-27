import styled from "styled-components";
import patternCircle from "../assets/images/pattern-circle.svg";

export const HeroPatternCircle = styled.div`
  background-image: url(${patternCircle});
  width: 8.0625rem;
  height: 100%;
  position: absolute;
  right: -5rem;
  top: 9.5rem;
  background-repeat: no-repeat;
  z-index: 1;

  @media (min-width: 768px) {
    right: -6rem;
    top: 25.5rem;
  }

  @media (min-width: 1440px) {
    top: 28rem;
    right: 23.8rem;
  }
`;
