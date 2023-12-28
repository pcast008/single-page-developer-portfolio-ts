import styled from "styled-components";

const FooterRing = styled.div`
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

export function FooterPatternRing() {
  return (
    <FooterRing>
      <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129">
        <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
    </FooterRing>
  );
}
