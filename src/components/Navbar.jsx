import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`navbar-lx ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textDecoration: 'none' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="url(#logo-g)" />
            <path d="M8 20L14 8L20 20M10.5 16h7" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="logo-g" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#7C3AED" />
              </linearGradient>
            </defs>
          </svg>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '1rem', color: 'var(--on-surface)', letterSpacing: '-0.01em' }}>LaunchPad</span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: '2.5rem' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-lx-link">{l.label}</a>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href="#" className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8125rem' }}>Log in</a>
          <a href="#" className="btn-gold" style={{ padding: '0.5625rem 1.25rem', fontSize: '0.8125rem' }}>Get started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
