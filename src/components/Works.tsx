import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const WorksSection = styled.section`
  padding: clamp(3rem, 5vw, 5rem) 0;
  background-color: ${props => props.theme.colors.background.darker};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  color: ${props => props.theme.colors.text.primary};
  font-size: clamp(2rem, 4vw, 2.5rem);
  line-height: 1.2;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(1.5rem, 3vw, 2rem);
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.background.dark};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: clamp(200px, 30vw, 250px);
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: clamp(1rem, 2vw, 1.5rem);
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 0.5rem;
    font-size: clamp(1.1rem, 1.5vw, 1.3rem);
    line-height: 1.3;
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: 1rem;
    font-size: clamp(0.9rem, 1.2vw, 1rem);
    line-height: 1.5;
    flex: 1;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.primary.main};
  padding: clamp(0.2rem, 0.5vw, 0.3rem) clamp(0.4rem, 1vw, 0.6rem);
  border-radius: 4px;
  font-size: clamp(0.7rem, 1vw, 0.8rem);
  white-space: nowrap;
`;

const Works: React.FC = () => {
  const projects = [
    {
      title: 'Application E-commerce',
      description: "Une démo d'e-commerce open-source, offrant une expérience d'achat moderne et performante.",
      tech: ['React', 'TypeScript', 'NodeJS', 'Tailwind.CSS'],
      image: '/images/projects/ecommerce.jpg'
    },
    {
      title: 'Chatbot',
      description: 'Une démo interactive de chatbot intelligent pour offrir des réponses fluides et naturelles.',
      tech: ['ReactJS', 'NextJS', 'API Gemini', 'Tailwind.CSS'],
      image: '/images/projects/chatbot.jpg'
    },
    {
      title: 'Application de Gestion',
      description: 'Une application de gestion d\'une salle de sport avec tableau de bord et statistiques.',
      tech: ['Java', 'Swing', 'MySQL', 'Cursor'],
      image: '/images/projects/gym-app.jpg'
    },
  ];

  return (
    <WorksSection id="works">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mes Projets
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage imageUrl={project.image}/>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </WorksSection>
  );
};

export default Works; 