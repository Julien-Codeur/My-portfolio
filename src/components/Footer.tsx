import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FooterSection = styled.footer`
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.background.darker} 0%,
    ${props => props.theme.colors.background.dark} 100%
  );
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.theme.colors.primary.main}50,
      transparent
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: ${props => props.theme.colors.primary.main};
  font-size: 1.25rem;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary.main},
      ${props => props.theme.colors.secondary.main}
    );
  }
`;

const FooterText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.25rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.background.light};
  border: 1px solid ${props => props.theme.colors.background.light};

  &:hover {
    color: ${props => props.theme.colors.primary.main};
    background: transparent;
    border-color: ${props => props.theme.colors.primary.main};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(motion.a)`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;

  &:hover {
    color: ${props => props.theme.colors.primary.main};
    transform: translateX(5px);
  }

  i {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.primary.main};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${props => props.theme.colors.text.secondary};
  padding: 0.5rem 0;

  i {
    color: ${props => props.theme.colors.primary.main};
    font-size: 1rem;
    width: 20px;
    text-align: center;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/Julien-Codeur', label: 'GitHub' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/julien-eymard-6b5b192b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', url: 'https://x.com/juli68803?t=7hix05lIMx7H-BaryA705g&s=09', label: 'Twitter' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/juliencodeur?igsh=YzljYTk1ODg3Zg==', label: 'Instagram' }
  ];

  const quickLinks = [
    { icon: 'fas fa-chevron-right', text: 'À propos', href: '#about' },
    { icon: 'fas fa-chevron-right', text: 'Projets', href: '#works' },
    { icon: 'fas fa-chevron-right', text: 'Blog', href: '#blog' },
    { icon: 'fas fa-chevron-right', text: 'Contact', href: '#contact' }
  ];

  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>À propos</FooterTitle>
            <FooterText>
            Développeur web et mobile passionné par la création d'expériences numériques exceptionnelles.
            </FooterText>
            <SocialLinks>
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={link.icon}></i>
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Liens rapides</FooterTitle>
            <FooterLinks>
              {quickLinks.map((link, index) => (
                <FooterLink
                  key={index}
                  href={link.href}
                  whileHover={{ x: 5 }}
                >
                  <i className={link.icon}></i>
                  {link.text}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <i className="fas fa-envelope"></i>
                <span>eymardjulien58@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-phone"></i>
                <span>+228 98 79 58 85</span>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-map-marker-alt"></i>
                <span>Lomé, Togo</span>
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>

        <BottomBar>
          <Copyright>
            © {currentYear} Julien Codeur. Tous droits réservés.
          </Copyright>
        </BottomBar>
      </Container>
    </FooterSection>
  );
};

export default Footer;