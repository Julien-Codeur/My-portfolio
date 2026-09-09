import styled from '@emotion/styled';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: flex-end;
  padding: clamp(5.5rem, 12vw, 7rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 8vw, 5rem);
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      160deg,
      ${props => props.theme.colors.background.darker} 0%,
      ${props => props.theme.colors.background.dark} 48%,
      #dce9e8 100%
    ),
    repeating-linear-gradient(
      -18deg,
      transparent,
      transparent 14px,
      rgba(16, 20, 24, 0.03) 14px,
      rgba(16, 20, 24, 0.03) 15px
    );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 920px;
  width: 100%;
`;

const Brand = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(3rem, 11vw, 6.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const Role = styled(motion.p)`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(1.15rem, 2.4vw, 1.5rem);
  font-weight: 600;
  color: ${props => props.theme.colors.primary.main};
  margin-bottom: 0.75rem;
`;

const Tagline = styled(motion.p)`
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.65;
  max-width: 34rem;
  margin-bottom: 0.35rem;
`;

const LegalName = styled(motion.p)`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2rem;
`;

const CtaGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  background: ${props => props.theme.colors.primary.main};
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primary.dark};
  }
`;

const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text.primary};
  font-weight: 600;
  font-size: 1rem;
  background: ${props => props.theme.colors.surface};
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.main};
  }
`;

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const enter = (delay = 0) =>
    reduceMotion
      ? { initial: false as const, animate: undefined }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <HeroSection id="home" aria-label="Introduction">
      <HeroContent>
        <Brand {...enter(0)}>{site.brand}</Brand>
        <Role {...enter(0.08)}>{site.role}</Role>
        <Tagline {...enter(0.14)}>{site.tagline}</Tagline>
        <LegalName {...enter(0.18)}>{site.fullName}</LegalName>
        <CtaGroup {...enter(0.22)}>
          <PrimaryCta href="#works">Voir mes projets</PrimaryCta>
          <SecondaryCta href="#contact">Me contacter</SecondaryCta>
        </CtaGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
