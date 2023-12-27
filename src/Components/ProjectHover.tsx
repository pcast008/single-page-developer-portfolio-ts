import styled from "styled-components";
import { Button } from "./Button";

type ProjectProps = {
  image: string;
  title: string;
  skills: string[];
};

const ProjectContainer = styled.div`
  margin-top: 5rem;
`;

const ProjectImage = styled.div<{ $image?: string }>`
  max-width: 34.125rem;
  height: 25rem;
  position: relative;

  &:before {
    content: "";
    background-image: url(${(props) => props.$image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 25rem;
    cursor: pointer;
    position: absolute;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover:before {
    opacity: 0.3;
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
  gap: 2rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  ${ProjectImage}:hover & {
    display: flex;
  }
`;

export function ProjectHover({ image, title, skills }: ProjectProps) {
  return (
    <ProjectContainer>
      <ProjectImage $image={image}>
        <ButtonContainer>
          <Button text="View Project" />
          <Button text="View Code" />
        </ButtonContainer>
      </ProjectImage>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectSkillsContainer>
        {skills.map((skill) => (
          <ProjectSkill key={skill}>{skill}</ProjectSkill>
        ))}
      </ProjectSkillsContainer>
    </ProjectContainer>
  );
}
