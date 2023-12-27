import styled from "styled-components";
import { ReactNode } from "react";
import { FooterPatternRing } from "../StyledComponents/FooterPatternRing";

type FooterContainerProps = {
  children: ReactNode;
};

const StyledFooterContainer = styled.div`
  max-width: 23.4375rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
  position: relative;

  @media (min-width: 768px) {
    max-width: 48rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2.5rem;
  }

  @media (min-width: 1440px) {
    max-width: 90rem;
    padding-left: 10.31rem;
    padding-right: 10.31rem;
    padding-top: 5.25rem;
    padding-bottom: 5.75rem;
  }
`;

export function FooterContainer({ children }: FooterContainerProps) {
  return (
    <StyledFooterContainer>
      <FooterPatternRing />
      {children}
    </StyledFooterContainer>
  );
}
