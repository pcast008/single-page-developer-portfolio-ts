import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Button } from "./Button";
import { Project } from "./Project";
import { ProjectHover } from "./ProjectHover";
import { TProjects } from "../types";

const ProjectsContainer = styled.div``;

const ProjectsBodyContainer = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.25rem;
  }

  @media (min-width: 1440px) {
  }
`;

const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectsTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.071rem;

  @media (min-width: 768px) {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    letter-spacing: -0.12781rem;
  }

  @media (min-width: 1440px) {
    font-size: 5.5rem;
    font-weight: 700;
    line-height: 5.5rem;
    letter-spacing: -0.15625rem;
  }
`;

export function ProjectsSection({ projects }: { projects: TProjects }) {
  const desktop = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <ProjectsTitle>Projects</ProjectsTitle>
        <Button text="Contact Me" href="#contact" />
      </ProjectsHeader>
      <ProjectsBodyContainer>
        {projects.map((project) => {
          if (desktop) {
            return (
              <ProjectHover
                key={project.title}
                image={project.image}
                title={project.title}
                skills={project.skills}
              />
            );
          } else {
            return (
              <Project
                key={project.title}
                image={project.image}
                title={project.title}
                skills={project.skills}
              />
            );
          }
        })}
      </ProjectsBodyContainer>
    </ProjectsContainer>
  );
}
