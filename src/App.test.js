import React from 'react';
import { render, screen, within } from '@testing-library/react';

import App from './App';
import { ThemeProvider } from './ThemeContext';
import { education, experience, profile, projects } from './content/site';

function renderApp() {
  return render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  window.history.pushState({}, '', '/');
});

describe('landing page', () => {
  it('renders the name and role in the hero', () => {
    renderApp();
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument();
    expect(screen.getByText(profile.availability)).toBeInTheDocument();
  });

  it('renders every section landmark the nav links to', () => {
    const { container } = renderApp();
    ['about', 'experience', 'projects', 'skills', 'education', 'contact'].forEach((id) => {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    });
  });

  it('lists each role from the content file', () => {
    renderApp();
    experience.forEach((job) => {
      expect(screen.getByRole('heading', { name: job.role })).toBeInTheDocument();
    });
  });

  it('shows featured projects and hides the rest behind a toggle', () => {
    renderApp();
    const featured = projects.filter((p) => p.featured);
    const hidden = projects.filter((p) => !p.featured);

    featured.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    });
    hidden.forEach((project) => {
      expect(screen.queryByRole('heading', { name: project.title })).not.toBeInTheDocument();
    });
  });

  it('uses the corrected graduation date and contact details', () => {
    renderApp();
    expect(screen.getAllByText(education.period).length).toBeGreaterThan(0);

    const contact = document.querySelector('#contact');
    expect(within(contact).getByText(profile.email)).toBeInTheDocument();
    expect(
      within(contact).getByRole('link', { name: profile.linkedinHandle })
    ).toHaveAttribute('href', profile.linkedin);
  });
});

describe('footer', () => {
  it('links to the real email and LinkedIn profile', () => {
    renderApp();
    const footer = document.querySelector('.footer');

    expect(within(footer).getByLabelText('Email')).toHaveAttribute(
      'href',
      `mailto:${profile.email}`
    );
    expect(within(footer).getByLabelText('LinkedIn')).toHaveAttribute('href', profile.linkedin);
  });
});
