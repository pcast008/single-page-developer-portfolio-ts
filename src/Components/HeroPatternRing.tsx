import styled from "styled-components";

const StyledRing = styled.div`
  position: absolute;
  width: 33.125rem;
  height: 8.0625rem;
  top: 7.75rem;
  left: -22rem;
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

export function HeroPatternRing() {
  return (
    <StyledRing>
      <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129">
        <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
    </StyledRing>
  );
}
