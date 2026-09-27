import React from 'react';

const cols = {
  Platform:   ['Features', 'Telemetry', 'Integrations', 'Changelog'],
  Developers: ['API Docs', 'SDKs', 'CLI Reference', 'System Status'],
  Company:    ['About', 'Careers', 'Blog', 'Contact'],
  Legal:      ['Privacy Policy', 'Terms of Service', 'Security'],
};

const Footer = () => (
  <footer style={{ background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '4.5rem 0 2.5rem' }}>
    <div className="container-xl">
      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3.5rem' }}>

        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.125rem' }}>
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="url(#fl-g)" />
              <path d="M8 20L14 8L20 20M10.5 16h7" stroke="rgba(255,255,255,0.9)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="fl-g" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#A855F7" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--on-surface)' }}>LaunchPad</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '200px', fontWeight: 300 }}>
            Enterprise orbital infrastructure trusted by space-tech leaders worldwide.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(cols).map(([col, links]) => (
          <div key={col}>
            <div className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: 'var(--on-surface)', marginBottom: '1.25rem', textTransform: 'uppercase' }}>{col}</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map(l => (
                <li key={l}>
                  <a href="#" style={{ fontSize: '0.875rem', color: 'var(--muted)', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rule" style={{ marginBottom: '2rem' }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
          © 2026 LaunchPad Inc. All rights reserved.
        </div>
        <div className="font-mono" style={{ fontSize: '0.625rem', letterSpacing: '0.08em' }}>
          <span style={{ color: 'var(--muted)' }}>SYSTEM STATUS: </span>
          <span style={{ color: '#4ADE80' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 6px #4ADE80', marginRight: '0.375rem', verticalAlign: 'middle' }} />
            ALL SYSTEMS NOMINAL
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
