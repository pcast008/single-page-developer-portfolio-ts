import styled from "styled-components";
import { Skill } from "./Skill";
import { TSkills } from "../types";

const SkillsContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3.25rem;
    padding-bottom: 6.25rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 8.75rem;
    row-gap: 3.62rem;
  }
`;

export function SkillsSection({
  skills,
  children,
}: {
  skills: TSkills;
  children: React.ReactNode;
}) {
  return (
    <SkillsContent>
      {skills.map((skill) => (
        <Skill key={skill.name} title={skill.name} description={skill.years} />
      ))}
      {children}
    </SkillsContent>
  );
}
