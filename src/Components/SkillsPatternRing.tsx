import styled from "styled-components";

const SkillsRing = styled.div`
  width: 33.125rem;
  height: 8.0625rem;
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

export function SkillsPatternRing() {
  return (
    <SkillsRing>
      <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129">
        <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
          <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
          <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
        </g>
      </svg>
    </SkillsRing>
  );
}
