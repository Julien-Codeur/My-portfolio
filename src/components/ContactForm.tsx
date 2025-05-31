import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: clamp(3rem, 5vw, 5rem) 0;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.background.dark} 0%,
    ${props => props.theme.colors.background.darker} 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at top right,
      ${props => props.theme.colors.primary.main}20 0%,
      transparent 70%
    );
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: clamp(2rem, 4vw, 3rem);
  color: ${props => props.theme.colors.text.primary};
  font-size: clamp(2rem, 4vw, 2.5rem);
  line-height: 1.2;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.primary.main},
      ${props => props.theme.colors.secondary.main}
    );
    border-radius: 3px;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: clamp(2rem, 4vw, 3rem);
  align-items: start;
`;

const ContactInfo = styled.div`
  color: ${props => props.theme.colors.text.primary};
`;

const InfoTitle = styled.h3`
  font-size: clamp(1.3rem, 2vw, 1.5rem);
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  color: ${props => props.theme.colors.primary.main};
  line-height: 1.3;
`;

const InfoText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: clamp(1.5rem, 3vw, 2rem);
  font-size: clamp(0.9rem, 1.2vw, 1rem);
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.8rem, 1.5vw, 1rem);
  color: ${props => props.theme.colors.text.secondary};
  font-size: clamp(0.9rem, 1.2vw, 1rem);

  i {
    font-size: clamp(1.1rem, 1.5vw, 1.25rem);
    color: ${props => props.theme.colors.primary.main};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 1.5rem);
  background: ${props => props.theme.colors.background.darker};
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: 15px;
  box-shadow: ${props => props.theme.shadows.large};
  border: 1px solid ${props => props.theme.colors.background.light};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text.primary};
  font-weight: 500;
  font-size: clamp(0.8rem, 1.1vw, 0.9rem);
`;

const Input = styled.input`
  padding: clamp(0.8rem, 1.5vw, 1rem);
  border: 2px solid ${props => props.theme.colors.background.light};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.dark};
  color: ${props => props.theme.colors.text.primary};
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 1.2vw, 1rem);

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary.main}20;
  }
`;

const TextArea = styled.textarea`
  padding: clamp(0.8rem, 1.5vw, 1rem);
  border: 2px solid ${props => props.theme.colors.background.light};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.background.dark};
  color: ${props => props.theme.colors.text.primary};
  min-height: clamp(120px, 20vw, 150px);
  resize: vertical;
  transition: all 0.3s ease;
  font-size: clamp(0.9rem, 1.2vw, 1rem);

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary.main}20;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: clamp(0.8rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.secondary.main}
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: clamp(0.9rem, 1.2vw, 1rem);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled(motion.div)<{ type: 'success' | 'error' }>`
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
  background-color: ${props =>
    props.type === 'success'
      ? props.theme.colors.success
      : props.theme.colors.error};
  color: white;
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_5xvi81z',
        'template_aop5qab',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Julien Codeur',
          to_email: 'eymardjulien58@gmail.com',
        },
        'W9_jji-z07HhFFSV7'
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contactez-moi
        </SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <InfoTitle>Parlons de votre projet</InfoTitle>
            <InfoText>
              Je suis toujours ouvert à discuter de nouveaux projets, idées créatives ou opportunités de collaboration.
            </InfoText>
            <ContactDetails>
              <ContactItem>
                <i className="fas fa-envelope"></i>
                <span>eymardjulien58@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-phone"></i>
                <span>+228 91 23 45 67</span>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-map-marker-alt"></i>
                <span>Lomé, Togo</span>
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
                placeholder="Votre message..."
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
            </SubmitButton>
            {error && (
              <Message
                type="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {error}
              </Message>
            )}
            {isSubmitted && (
              <Message
                type="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Message envoyé avec succès !
              </Message>
            )}
          </Form>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default ContactForm; 