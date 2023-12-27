import styled from "styled-components";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const StyledContainer = styled.div`
  max-width: 23.4375rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 5rem;
  position: relative;

  @media (min-width: 768px) {
    max-width: 48rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1.81rem;
    padding-bottom: 6.25rem;
  }

  @media (min-width: 1440px) {
    max-width: 90rem;
    padding-left: 10.31rem;
    padding-right: 10.31rem;
    padding-top: 2.44rem;
    padding-bottom: 8.69rem;
  }
`;

export function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}
