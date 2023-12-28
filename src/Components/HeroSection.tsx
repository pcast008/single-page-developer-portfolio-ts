import styled from "styled-components";
import { Button } from "./Button";
import { useMediaQuery } from "react-responsive";
import { HeroPatternCircle } from "./HeroPatternCircle";

const HeroContainer = styled.div`
  text-align: center;
  position: relative;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const HeroTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.071rem;
  padding-bottom: 1.25rem;
  padding-top: 20.69rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    line-height: 4.5rem;
    letter-spacing: -0.12781rem;
    padding-bottom: 3.75rem;
    padding-top: 5.62rem;
  }

  @media (min-width: 1440px) {
    font-size: 5.5rem;
    line-height: 5.5rem;
    letter-spacing: -0.15625rem;
    padding-bottom: 2.69rem;
    padding-top: 7.94rem;
  }
`;

const TitleText = styled.span`
  border-bottom: 0.25rem solid #4ee1a0;
`;

const HeroDescription = styled.p`
  color: #d9d9d9;
  font-weight: 500;
  line-height: 1.625rem;
  padding-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: left;
    padding-bottom: 2.12rem;
  }

  @media (min-width: 1440px) {
    padding-bottom: 4.12rem;
  }
`;

function Title() {
  if (useMediaQuery({ query: "(max-width: 767px), (min-width: 1440px)" })) {
    return (
      <HeroTitle>
        Nice to meet you!
        <br />
        I'm <TitleText>Adam Keyes</TitleText>.
      </HeroTitle>
    );
  } else {
    return (
      <HeroTitle>
        Nice to
        <br />
        meet you! I'm
        <br />
        <TitleText>Adam Keyes</TitleText>.
      </HeroTitle>
    );
  }
}

function Description() {
  if (useMediaQuery({ query: "(min-width: 768px)" })) {
    return (
      <HeroDescription>
        Based in the UK, I’m a front-end developer
        <br />
        passionate about building accessible web apps
        <br />
        that users love.
      </HeroDescription>
    );
  } else {
    return (
      <HeroDescription>
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </HeroDescription>
    );
  }
}

export function HeroSection() {
  return (
    <HeroContainer>
      <HeroPatternCircle />
      <Title />
      <Description />
      <Button text="Contact Me" href="#contact" />
    </HeroContainer>
  );
}
