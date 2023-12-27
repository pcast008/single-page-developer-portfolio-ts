import styled from "styled-components";
import patternRing from "../assets/images/pattern-rings.svg";

export const HeroPatternRing = styled.div`
  background-image: url(${patternRing});
  width: 33.125rem;
  height: 100%;
  position: absolute;
  top: 7.75rem;
  left: -21.5rem;
  background-repeat: no-repeat;
  z-index: -5;

  @media (min-width: 768px) {
    top: 5.38rem;
    left: -16.5rem;
  }

  @media (min-width: 1440px) {
    top: 8.31rem;
    left: -6.2rem;
  }
`;
