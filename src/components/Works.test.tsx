import { describe, expect, it } from 'vitest';
import { renderWithTheme, screen } from '../test/test-utils';
import Works from '../components/Works';
import { projects } from '../data/projects';

describe('Works', () => {
  it('liste tous les projets avec un lien code source', () => {
    renderWithTheme(<Works />);

    expect(
      screen.getByRole('heading', { level: 2, name: 'Projets' })
    ).toBeInTheDocument();

    for (const project of projects) {
      expect(
        screen.getByRole('heading', { level: 3, name: project.title })
      ).toBeInTheDocument();
    }

    expect(screen.getAllByRole('link', { name: 'Code source' }).length).toBe(
      projects.filter(p => p.githubUrl).length
    );
  });
});
