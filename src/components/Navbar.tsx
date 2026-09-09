import { useEffect, useId, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { site, navLinks } from '../data/site';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem clamp(1.25rem, 5vw, 4rem);
  background-color: ${props =>
    props.$scrolled ? 'rgba(244, 247, 249, 0.92)' : 'transparent'};
  backdrop-filter: ${props => (props.$scrolled ? 'blur(10px)' : 'none')};
  border-bottom: 1px solid
    ${props => (props.$scrolled ? props.theme.colors.border : 'transparent')};
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
`;

const Logo = styled.a`
  font-family: ${props => props.theme.fonts.display};
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.75rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  color: ${props => props.theme.colors.text.primary};
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  align-items: center;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-flex;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${props => props.theme.colors.background.dark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;
  z-index: 999;
  padding: 2rem;
`;

const MobileNavLink = styled.a`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary};

  &:hover {
    color: ${props => props.theme.colors.primary.main};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: clamp(1.25rem, 5vw, 4rem);
  background: none;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.primary};
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }

      if (event.key !== 'Tab' || !closeButtonRef.current) return;

      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>(
          `#${CSS.escape(menuId)} a, #${CSS.escape(menuId)} button`
        )
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const openButton = openButtonRef.current;
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      openButton?.focus();
    };
  }, [isMobileMenuOpen, menuId]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <Nav $scrolled={scrolled}>
      <Logo href="#home">{site.shortName}</Logo>

      <NavLinks>
        {navLinks.map(link => (
          <NavLink key={link.href} href={link.href}>
            {link.text}
          </NavLink>
        ))}
      </NavLinks>

      <MobileMenuButton
        ref={openButtonRef}
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls={menuId}
      >
        ☰
      </MobileMenuButton>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CloseButton
              ref={closeButtonRef}
              onClick={closeMobileMenu}
              aria-label="Fermer le menu"
            >
              ✕
            </CloseButton>
            {navLinks.map(link => (
              <MobileNavLink key={link.href} href={link.href} onClick={closeMobileMenu}>
                {link.text}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navbar;
