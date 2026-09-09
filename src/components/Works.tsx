import styled from '@emotion/styled';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/projects';

const WorksSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem);
  background-color: ${props => props.theme.colors.background.darker};
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const SectionLead = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: clamp(2rem, 4vw, 3rem);
  max-width: 36rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const ProjectItem = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1.2fr);
  gap: clamp(1.25rem, 3vw, 2.5rem);
  padding: clamp(1.5rem, 3vw, 2.25rem) 0;
  border-top: 1px solid ${props => props.theme.colors.border};
  align-items: start;

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: clamp(180px, 28vw, 240px);
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
`;

function projectWebp(src: string) {
  return src.replace(/\.jpe?g$/i, '.webp');
}

const ProjectBody = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.display};
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.text.primary};
  }

  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 0.98rem;
    line-height: 1.6;
    margin-bottom: 0.65rem;
  }
`;

const Meta = styled.p`
  font-size: 0.9rem !important;
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.85rem;
  list-style: none;
  margin: 0.85rem 0 1rem;
  padding: 0;

  li {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary.dark};
  }
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.primary.main};
  font-weight: 600;
  font-size: 0.92rem;
  border-bottom: 1px solid transparent;
  padding-bottom: 1px;

  &:hover {
    border-bottom-color: ${props => props.theme.colors.primary.main};
  }
`;

const Works = () => {
  const reduceMotion = useReducedMotion();

  return (
    <WorksSection id="works">
      <Container>
        <SectionTitle
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          Projets
        </SectionTitle>
        <SectionLead>
          Sélection de travaux — problème, approche et stack. Les liens pointent vers le
          code ou la démo quand elle est disponible.
        </SectionLead>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, margin: '-8%' }}
            >
              <picture>
                <source srcSet={projectWebp(project.image)} type="image/webp" />
                <ProjectImage
                  src={project.image}
                  alt={`Aperçu — ${project.title}`}
                  loading="lazy"
                  width={640}
                  height={400}
                />
              </picture>
              <ProjectBody>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Meta>
                  <strong>Problème :</strong> {project.problem}
                </Meta>
                <Meta>
                  <strong>Approche :</strong> {project.solution}
                </Meta>
                <TechStack>
                  {project.tech.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </TechStack>
                <Links>
                  {project.githubUrl && (
                    <ProjectLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code source
                    </ProjectLink>
                  )}
                  {project.liveUrl && (
                    <ProjectLink
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Démo live
                    </ProjectLink>
                  )}
                </Links>
              </ProjectBody>
            </ProjectItem>
          ))}
        </ProjectList>
      </Container>
    </WorksSection>
  );
};

export default Works;
