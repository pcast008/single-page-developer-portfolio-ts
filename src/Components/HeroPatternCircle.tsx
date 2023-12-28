import styled from "styled-components";

const StyledCircle = styled.div`
  width: 8.0625rem;
  height: 8.0625rem;
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

export function HeroPatternCircle() {
  return (
    <StyledCircle>
      <svg xmlns="http://www.w3.org/2000/svg" width="129" height="129">
        <circle
          cx="830.5"
          cy="585.5"
          r="64"
          fill="none"
          stroke="#FFF"
          transform="translate(-766 -521)"
        />
      </svg>
    </StyledCircle>
  );
}
