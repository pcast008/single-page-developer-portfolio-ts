import styled from "styled-components";
import patternRing from "../assets/images/pattern-rings.svg";

export const FooterPatternRing = styled.div`
  background-image: url(${patternRing});
  width: 33.125rem;
  height: 8.0625rem;
  position: absolute;
  top: 28rem;
  right: 11.75rem;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    top: 35rem;
    right: 38rem;
  }

  @media (min-width: 1440px) {
    top: 20.44rem;
    left: -12.9rem;
  }
`;
