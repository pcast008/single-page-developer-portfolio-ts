import styled from "styled-components";

type SkillProps = {
  title: string;
  description: string;
};

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    gap: 0.875rem;
  }

  @media (min-width: 1440px) {
  }
`;

const SkillTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: -0.0625rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3.5rem;
    letter-spacing: -0.09375rem;
  }

  @media (min-width: 1440px) {
  }
`;

const SkillDescription = styled.div`
  color: #d9d9d9;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.625rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media (min-width: 1440px) {
  }
`;

export function Skill({ title, description }: SkillProps) {
  return (
    <SkillContainer>
      <SkillTitle>{title}</SkillTitle>
      <SkillDescription>{description}</SkillDescription>
    </SkillContainer>
  );
}
