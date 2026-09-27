import React from 'react';

const CTASection = () => (
  <section style={{ padding: '8rem 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
    <div className="rule" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

    {/* Radial glows */}
    <div style={{ position: 'absolute', left: '25%', top: '50%', transform: 'translateY(-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', right: '25%', top: '50%', transform: 'translateY(-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

    <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
      <div className="eyebrow" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
        <span className="eyebrow-dot" />
        READY FOR LAUNCH
      </div>
      <h2 className="font-display" style={{ fontSize: '3.5rem', fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--on-surface)', lineHeight: 1.1, marginBottom: '1.375rem' }}>
        Your mission begins<br />
        <span className="text-gold" style={{  }}>today.</span>
      </h2>
      <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.125rem', lineHeight: 1.75, maxWidth: '26rem', margin: '0 auto 3rem', fontWeight: 300 }}>
        Join 12,000+ engineering teams deploying at orbital scale. First cluster is always free.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <a href="#" className="btn-gold" style={{ padding: '1.0625rem 2.5rem', fontSize: '1rem' }}>
          Begin Launch Sequence
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#pricing" className="btn-outline" style={{ padding: '1.0625rem 2.5rem', fontSize: '1rem' }}>View Pricing</a>
      </div>
    </div>

    <div className="rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
  </section>
);

export default CTASection;
