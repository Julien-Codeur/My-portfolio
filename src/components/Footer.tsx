import styled from '@emotion/styled';
import { site, navLinks } from '../data/site';

const FooterSection = styled.footer`
  background-color: ${props => props.theme.colors.secondary.dark};
  color: #e8eef2;
  padding: clamp(3rem, 6vw, 4rem) clamp(1.25rem, 5vw, 4rem) 2rem;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2.5rem;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const FooterTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.05rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.25rem;
`;

const FooterText = styled.p`
  color: rgba(232, 238, 242, 0.75);
  line-height: 1.6;
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.35rem;
`;

const SocialLink = styled.a`
  color: rgba(232, 238, 242, 0.8);
  font-size: 1.15rem;
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(232, 238, 242, 0.25);
  border-radius: ${props => props.theme.borderRadius.medium};
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: #fff;
    border-color: ${props => props.theme.colors.primary.light};
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const FooterLink = styled.a`
  color: rgba(232, 238, 242, 0.75);
  font-size: 0.95rem;

  &:hover {
    color: #fff;
  }
`;

const ContactItem = styled.div`
  color: rgba(232, 238, 242, 0.75);
  font-size: 0.95rem;
  line-height: 1.5;

  a {
    color: inherit;

    &:hover {
      color: #fff;
    }
  }
`;

const BottomBar = styled.div`
  padding-top: 1.5rem;
  border-top: 1px solid rgba(232, 238, 242, 0.15);
  color: rgba(232, 238, 242, 0.55);
  font-size: 0.85rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>{site.brand}</FooterTitle>
            <FooterText>
              {site.role} basé à {site.location}.
            </FooterText>
            <SocialLinks>
              {site.socials.map(link => (
                <SocialLink
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <i className={link.icon} aria-hidden="true"></i>
                </SocialLink>
              ))}
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Navigation</FooterTitle>
            <FooterLinks>
              {navLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>
                  {link.text}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <ContactItem>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </ContactItem>
            <ContactItem>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            </ContactItem>
            <ContactItem>{site.location}</ContactItem>
          </FooterColumn>
        </FooterGrid>

        <BottomBar>
          <p>
            © {currentYear} {site.brand}. Tous droits réservés.
          </p>
        </BottomBar>
      </Container>
    </FooterSection>
  );
};

export default Footer;
