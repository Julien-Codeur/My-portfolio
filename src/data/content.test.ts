import { describe, expect, it } from 'vitest';
import { projects } from '../data/projects';
import { site, navLinks } from '../data/site';
import { skills } from '../data/skills';

describe('données du site', () => {
  it('expose une identité cohérente', () => {
    expect(site.email).toContain('@');
    expect(site.phone).toMatch(/^\+228/);
    expect(navLinks.some(l => l.href === '#contact')).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  it('définit des projets complets', () => {
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.image).toMatch(/^\/images\//);
    }
  });
});
