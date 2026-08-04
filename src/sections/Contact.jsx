import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiDownload, FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Reveal, Section } from '../components/Section';
import { profile } from '../content/site';

const channels = [
  {
    icon: FiMail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    copy: profile.email,
    primary: true,
  },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { icon: FaGithub, label: 'GitHub', value: profile.githubHandle, href: profile.github, external: true },
];

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard blocked (insecure origin or denied permission) — leave the
      // mailto: link as the working fallback.
    }
  };

  return (
    <button
      type="button"
      className="contact__copy"
      onClick={onCopy}
      aria-label={copied ? 'Copied to clipboard' : `Copy ${value} to clipboard`}
      title="Copy to clipboard"
    >
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
      <span className="visually-hidden" role="status">
        {copied ? 'Copied' : ''}
      </span>
    </button>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      index={6}
      title="Get in touch"
      kicker="Hiring, collaborating, or just want to talk about synthetic data — I'll reply."
    >
      <div className="contact">
        {channels.map(({ icon: Icon, label, value, href, external, primary, copy }, i) => (
          <Reveal key={label} delay={Math.min(i, 3) * 0.06}>
            {/* Stretched-link card: the anchor covers the card via ::after, so the
                copy button stays a sibling rather than an invalid nested button. */}
            <div className={`card contact__card ${primary ? 'contact__card--primary' : ''}`}>
              <span className="contact__icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="contact__label">{label}</span>
              <a
                className="contact__value contact__stretch"
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {value}
              </a>
              {external && <FiArrowUpRight className="contact__out" aria-hidden="true" />}
              {copy && <CopyButton value={copy} />}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="contact__resume" delay={0.12}>
        <p>Prefer the one-page version?</p>
        <a className="btn btn--primary" href={profile.resume} download>
          <FiDownload aria-hidden="true" />
          Download résumé (PDF)
        </a>
      </Reveal>
    </Section>
  );
}

export default Contact;
