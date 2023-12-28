import { Navbar } from "./Components/Navbar";
import "./App.css";
import { Container } from "./Components/Container";
import { FooterContainer } from "./Components/FooterContainer";
import { OuterFooterContainer } from "./Components/OuterFooterContainer";
import { HeroSection } from "./Components/HeroSection";
import { SkillsSection } from "./Components/SkillsSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { ContactForm } from "./Components/ContactForm";
import { useState, useEffect } from "react";
import { TSkills, TProjects } from "./types";
import { FirstDivider } from "./Components/Divider Components/FirstDivider";
import { SecondDivider } from "./Components/Divider Components/SecondDivider";
import { ThirdDivider } from "./Components/Divider Components/ThirdDivider";
import { ProfileImage } from "./StyledComponents/ProfileImage";
import { HeroPatternRing } from "./Components/HeroPatternRing";
import { SkillsPatternRing } from "./Components/SkillsPatternRing";

export default function App() {
  const [projects, setProjects] = useState<TProjects>([]);
  const [skills, setSkills] = useState<TSkills>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("./db.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data.projects);
        setSkills(data.skills);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <Container>
        <HeroPatternRing />
        <ProfileImage />
        <Navbar />
        <HeroSection />
        <FirstDivider />
        <SkillsSection skills={skills}>
          <SkillsPatternRing />
        </SkillsSection>
        <SecondDivider />
        <ProjectsSection projects={projects} />
      </Container>

      <OuterFooterContainer>
        <FooterContainer>
          <ContactForm />
          <ThirdDivider />
          <Navbar />
        </FooterContainer>
      </OuterFooterContainer>
    </div>
  );
}
