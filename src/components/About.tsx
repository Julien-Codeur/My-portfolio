import styled from '@emotion/styled';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { skills } from '../data/skills';

const AboutSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem);
  background-color: ${props => props.theme.colors.surface};
`;

const AboutContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: clamp(280px, 38vw, 420px);
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.large};
  border: 1px solid ${props => props.theme.colors.border};
`;

const AboutPicture = styled(motion.picture)`
  display: block;
  width: 100%;

  img {
    width: 100%;
    height: clamp(280px, 38vw, 420px);
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.large};
    border: 1px solid ${props => props.theme.colors.border};
  }
`;

const AboutContent = styled(motion.div)`
  h2 {
    font-family: ${props => props.theme.fonts.display};
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text.primary};
  }

  > p {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    line-height: 1.7;
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: 2rem;
  }
`;

const SkillsList = styled.dl`
  display: grid;
  gap: 1.1rem;
`;

const SkillRow = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0.35rem;
  }

  dt {
    font-weight: 600;
    color: ${props => props.theme.colors.primary.main};
    font-size: 0.95rem;
  }

  dd {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 0.95rem;
    margin: 0;
  }
`;

const About = () => {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        viewport: { once: true, margin: '-10%' },
      };

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutPicture {...reveal}>
          <source srcSet="/images/profile/profile.webp" type="image/webp" />
          <AboutImage
            src="/images/profile/profile.jpg"
            alt={`Portrait de ${site.fullName}`}
            width={640}
            height={492}
          />
        </AboutPicture>
        <AboutContent {...reveal}>
          <h2>{site.about.title}</h2>
          <p>{site.about.body}</p>
          <SkillsList>
            {skills.map(group => (
              <SkillRow key={group.category}>
                <dt>{group.category}</dt>
                <dd>{group.items.join(' · ')}</dd>
              </SkillRow>
            ))}
          </SkillsList>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
