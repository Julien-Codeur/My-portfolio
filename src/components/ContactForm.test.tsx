import { describe, expect, it, vi, beforeEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import emailjs from '@emailjs/browser';
import { renderWithTheme, screen, waitFor } from '../test/test-utils';
import ContactForm from '../components/ContactForm';

vi.mock('@emailjs/browser', () => ({
  default: {
    send: vi.fn(),
  },
}));

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service_test');
    vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template_test');
    vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_test');
  });

  it('envoie le message via EmailJS', async () => {
    const user = userEvent.setup();
    vi.mocked(emailjs.send).mockResolvedValue({
      status: 200,
      text: 'OK',
    });

    renderWithTheme(<ContactForm />);

    await user.type(screen.getByLabelText('Nom'), 'Ada');
    await user.type(screen.getByLabelText('Email'), 'ada@example.com');
    await user.type(screen.getByLabelText('Message'), 'Bonjour');
    await user.click(screen.getByRole('button', { name: 'Envoyer le message' }));

    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalled();
    });

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Message envoyé avec succès.'
    );
  });
});
