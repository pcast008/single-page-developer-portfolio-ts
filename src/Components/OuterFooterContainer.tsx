import styled from "styled-components";
import { ReactNode } from "react";

type FooterContainerProps = {
  children: ReactNode;
};

const StyledOuterFooterContainer = styled.div`
  background-color: #242424;
`;

export function OuterFooterContainer({ children }: FooterContainerProps) {
  return (
    <StyledOuterFooterContainer id="contact">
      {children}
    </StyledOuterFooterContainer>
  );
}
