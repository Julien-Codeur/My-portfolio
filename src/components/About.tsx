import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: clamp(3rem, 5vw, 5rem) clamp(1rem, 3vw, 2rem);
  background-color: ${props => props.theme.colors.background.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 4vw, 3rem);
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`;

const AboutImage = styled(motion.div)`
  width: 100%;
  height: clamp(300px, 40vw, 400px);
  background-image: url('/images/profile/profile.jpg');
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  position: relative;
  border: 1px solid ${props => props.theme.colors.background.light};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
    background: linear-gradient(45deg, ${props => props.theme.colors.primary.main}, ${props => props.theme.colors.secondary.main});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.6;
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: clamp(1.5rem, 3vw, 2rem);
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: clamp(1.5rem, 3vw, 2rem);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.div)`
  background-color: ${props => props.theme.colors.background.darker};
  padding: clamp(0.8rem, 1.5vw, 1rem);
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 1vw, 0.8rem);
  border: 1px solid ${props => props.theme.colors.background.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.large};
  }

  span:first-of-type {
    font-weight: bold;
    color: ${props => props.theme.colors.primary.main};
    font-size: clamp(0.9rem, 1.2vw, 1rem);
  }

  span:last-of-type {
    color: ${props => props.theme.colors.text.secondary};
    font-size: clamp(0.8rem, 1vw, 0.9rem);
  }
`;

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 'Débutant' },
    { name: 'FLutter', level: 'Debutant' },
    { name: 'Python', level: 'Intermédiaire' },
    { name: 'MySQL', level: 'Intermédiaire' },
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutImage
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <AboutContent
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>À propos de moi</h2>
          <p>
          Passionné par le développement web et mobile, je mets ma créativité et ma rigueur au service de projets innovants. 
          Étudiant en licence informatique, spécialisé dans le développement d'applications, j'aime relever des défis techniques 
          et concevoir des solutions élégantes, performantes et intuitives.
          </p>
          <SkillsContainer>
            {skills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </SkillItem>
            ))}
          </SkillsContainer>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 