import styled from "styled-components";
import patternRing from "../assets/images/pattern-rings.svg";

export const SkillsPatternRing = styled.div`
  background-image: url(${patternRing});
  width: 33.125rem;
  height: 100%;
  position: absolute;
  top: 30.6rem;
  left: 50%;
  background-repeat: no-repeat;
  z-index: -5;

  @media (min-width: 768px) {
    top: 20.875rem;
    left: 34rem;
  }

  @media (min-width: 1440px) {
    top: 11.25rem;
    left: 61.19rem;
  }
`;
