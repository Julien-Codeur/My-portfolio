import { FormEvent, ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';
import { motion, useReducedMotion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { site } from '../data/site';

const ContactSection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) clamp(1.25rem, 5vw, 4rem);
  background-color: ${props => props.theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1000px;
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
  margin-bottom: clamp(2rem, 4vw, 2.75rem);
  max-width: 34rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h3`
  font-family: ${props => props.theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text.primary};
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.65;
  margin-bottom: 1.5rem;
`;

const ContactDetails = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

const ContactItem = styled.li`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.98rem;

  a {
    color: ${props => props.theme.colors.primary.main};
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  span.label {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: 0.15rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: ${props => props.theme.colors.background.dark};
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.large};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text.primary};
  font-weight: 600;
  font-size: 0.88rem;
`;

const Input = styled.input`
  padding: 0.85rem 0.95rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text.primary};
  font-family: inherit;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
  }
`;

const TextArea = styled.textarea`
  padding: 0.85rem 0.95rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.medium};
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text.primary};
  min-height: 140px;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
  }
`;

const SubmitButton = styled.button`
  padding: 0.9rem 1.4rem;
  background: ${props => props.theme.colors.primary.main};
  color: #fff;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
  transition: background 0.2s ease;

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primary.dark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ $type: 'success' | 'error' }>`
  padding: 0.85rem 1rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  text-align: center;
  background-color: ${props =>
    props.$type === 'success' ? props.theme.colors.success : props.theme.colors.error};
  color: #fff;
  font-size: 0.95rem;
`;

const ContactForm = () => {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Configuration du formulaire incomplete. Vérifiez les variables EmailJS.');
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: site.brand,
          to_email: site.email,
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
        >
          Contact
        </SectionTitle>
        <SectionLead>
          Un projet, une opportunité ou une question — écrivez-moi.
        </SectionLead>
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Coordonnées</InfoTitle>
            <InfoText>
              Ouvert aux collaborations, stages et missions freelance autour du web et du
              mobile.
            </InfoText>
            <ContactDetails>
              <ContactItem>
                <span className="label">Email</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </ContactItem>
              <ContactItem>
                <span className="label">Téléphone</span>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </ContactItem>
              <ContactItem>
                <span className="label">Localisation</span>
                {site.location}
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          <Form onSubmit={handleSubmit} noValidate={false}>
            <FormGroup>
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                placeholder="Votre nom"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
                placeholder="votre@email.com"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message…"
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Envoi en cours…' : 'Envoyer le message'}
            </SubmitButton>
            {error && (
              <Message $type="error" role="alert">
                {error}
              </Message>
            )}
            {isSubmitted && (
              <Message $type="success" role="status">
                Message envoyé avec succès.
              </Message>
            )}
          </Form>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default ContactForm;
