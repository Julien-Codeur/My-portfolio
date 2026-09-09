import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '../test/test-utils';
import Hero from '../components/Hero';
import { site } from '../data/site';

describe('Hero', () => {
  it('affiche la marque et les CTA principaux', () => {
    renderWithTheme(<Hero />);

    expect(
      screen.getByRole('heading', { level: 1, name: site.brand })
    ).toBeInTheDocument();
    expect(screen.getByText(site.role)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voir mes projets' })).toHaveAttribute(
      'href',
      '#works'
    );
    expect(screen.getByRole('link', { name: 'Me contacter' })).toHaveAttribute(
      'href',
      '#contact'
    );
  });
});
