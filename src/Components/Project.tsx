import styled from "styled-components";
import { Button } from "./Button";

type ProjectProps = {
  image: string;
  title: string;
  skills: string[];
};

const ProjectContainer = styled.div`
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    margin-top: 3.75rem;
  }

  @media (min-width: 1440px) {
    margin-top: 5rem;
  }
`;

const ProjectImage = styled.div<{ $image?: string }>`
  background-image: url(${(props) => props.$image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 15.8125rem;
  background-position: center;
  max-width: 21.5625rem;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    max-width: 34.125rem;
    height: 25rem;
  }
`;

const ProjectTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  text-transform: uppercase;
  text-align: left;
  margin-top: 1.25rem;
`;

const ProjectSkillsContainer = styled.div`
  display: flex;
  gap: 1.13rem;
  margin-bottom: 1.25rem;
`;

const ProjectSkill = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.75rem;
  text-transform: uppercase;
  color: #d9d9d9;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export function Project({ image, title, skills }: ProjectProps) {
  return (
    <ProjectContainer>
      <ProjectImage $image={image}></ProjectImage>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectSkillsContainer>
        {skills.map((skill) => (
          <ProjectSkill key={skill}>{skill}</ProjectSkill>
        ))}
      </ProjectSkillsContainer>
      <ButtonContainer>
        <Button text="View Project" />
        <Button text="View Code" />
      </ButtonContainer>
    </ProjectContainer>
  );
}
