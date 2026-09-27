import React, { useEffect, useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Connect Your Infrastructure',
    desc: 'Plug LaunchPad into your existing stack in minutes. Native integrations with Kubernetes, Terraform, GitHub, and 40+ tools mean zero migration headaches.',
    detail: 'Automatic service discovery maps your entire topology on first connect.',
    tag: 'ONBOARD',
    accent: '#A855F7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14h16M14 6l8 8-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    metrics: [
      { label: 'Avg setup time', val: '< 1 hr' },
      { label: 'Integrations', val: '40+' },
    ],
  },
  {
    num: '02',
    title: 'Define Mission Parameters',
    desc: 'Configure deployment targets, uptime SLAs, latency thresholds, and alert policies. LaunchPad learns your tolerance zones and auto-tunes accordingly.',
    detail: 'ML-powered baseline calibration adapts within the first 24 hours.',
    tag: 'CONFIGURE',
    accent: '#38BDF8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.75"/>
        <path d="M9 14h3l2-5 2 10 2-5h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    metrics: [
      { label: 'Calibration time', val: '24 hrs' },
      { label: 'Policy templates', val: '60+' },
    ],
  },
  {
    num: '03',
    title: 'Deploy at Orbital Velocity',
    desc: 'One-click deployments propagate across your global cluster mesh. Blue-green, canary, or rolling — every strategy is a first-class citizen in LaunchPad.',
    detail: 'Automatic rollback fires instantly if error rate exceeds your threshold.',
    tag: 'DEPLOY',
    accent: '#C084FC',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.75"/>
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.4"/>
        <path d="M14 4v3M14 21v3M4 14h3M21 14h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
    metrics: [
      { label: 'Deploy strategies', val: '3 types' },
      { label: 'Rollback trigger', val: 'Auto' },
    ],
  },
  {
    num: '04',
    title: 'Monitor in Real Time',
    desc: 'Live telemetry streams every metric from every node. The AI Ops Engine surfaces anomalies before they escalate, and auto-executes runbooks without human intervention.',
    detail: 'Mean time to detect (MTTD) reduced to under 90 seconds across all clusters.',
    tag: 'OPERATE',
    accent: '#38BDF8',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l5-6 4 4 5-9 5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 24h20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
    metrics: [
      { label: 'MTTD', val: '< 90s' },
      { label: 'Auto-runbooks', val: 'Yes' },
    ],
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => e.isIntersecting && setTimeout(() => e.target.classList.add('visible'), i * 80));
    }, { threshold: 0.06 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} style={{ padding: '8rem 0', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
      <div className="rule" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      {/* Background large numeral watermark */}
      <div style={{
        position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)', fontSize: '28rem', fontWeight: 800,
        color: 'rgba(168,85,247,0.025)', lineHeight: 1,
        pointerEvents: 'none', userSelect: 'none', letterSpacing: '-0.05em',
      }}>04</div>

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <div className="eyebrow reveal" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>HOW IT WORKS</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end' }}>
            <h2 className="font-display reveal" style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--on-surface)', lineHeight: 1.1, margin: 0 }}>
              Up and running in<br />
              <span className="text-gold">four steps.</span>
            </h2>
            <p className="reveal" style={{ color: 'var(--on-surface-variant)', fontSize: '1.0625rem', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              No professional services. No lengthy onboarding. LaunchPad is built to become your primary command center without ever slowing you down.
            </p>
          </div>
        </div>

        {/* Steps — 2×2 bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '1.25rem' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal"
              style={{
                position: 'relative',
                background: 'rgba(13,15,33,0.75)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem',
                padding: '2.5rem',
                overflow: 'hidden',
                transitionDelay: `${i * 80}ms`,
                cursor: 'default',
                transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${step.accent}40`;
                e.currentTarget.style.boxShadow = `0 24px 60px -12px ${step.accent}25`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              {/* Large background step number */}
              <div style={{
                position: 'absolute', bottom: '-1rem', right: '1.5rem',
                fontFamily: 'var(--font-display)', fontSize: '8rem', fontWeight: 800,
                color: `${step.accent}08`, lineHeight: 1,
                pointerEvents: 'none', userSelect: 'none',
              }}>{step.num}</div>

              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: '2.5rem', right: '2.5rem', height: '1px',
                background: `linear-gradient(90deg, transparent, ${step.accent}60, transparent)`,
              }} />

              {/* Top row — icon + tag + number */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {/* Icon */}
                  <div style={{
                    width: '3rem', height: '3rem',
                    borderRadius: '0.75rem',
                    background: `${step.accent}12`,
                    border: `1px solid ${step.accent}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step.accent,
                  }}>
                    {step.icon}
                  </div>
                  {/* Tag */}
                  <div className="font-mono" style={{
                    fontSize: '0.5625rem', letterSpacing: '0.14em',
                    color: step.accent, textTransform: 'uppercase',
                    background: `${step.accent}0D`,
                    border: `1px solid ${step.accent}25`,
                    padding: '0.25rem 0.75rem',
                    borderRadius: '9999px',
                  }}>
                    {step.tag}
                  </div>
                </div>
                {/* Step number */}
                <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 800, color: `${step.accent}30`, lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {step.num}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display" style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.875rem', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                {step.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--on-surface-variant)', marginBottom: '2rem', fontWeight: 300 }}>
                {step.desc}
              </p>

              {/* Metrics row */}
              <div style={{ display: 'flex', gap: '1px', background: 'rgba(255,255,255,0.04)', borderRadius: '0.625rem', overflow: 'hidden', marginBottom: '1.25rem' }}>
                {step.metrics.map(m => (
                  <div key={m.label} style={{ flex: 1, padding: '0.875rem 1rem', background: 'rgba(10,11,28,0.8)' }}>
                    <div className="font-display" style={{ fontSize: '1.125rem', fontWeight: 700, color: step.accent, lineHeight: 1, marginBottom: '0.25rem' }}>{m.val}</div>
                    <div className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Detail callout */}
              <div style={{
                padding: '0.75rem 1rem',
                background: `${step.accent}08`,
                border: `1px solid ${step.accent}20`,
                borderRadius: '0.625rem',
                display: 'flex', gap: '0.625rem', alignItems: 'flex-start',
              }}>
                <span style={{ color: step.accent, fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '0.05rem', flexShrink: 0 }}>↳</span>
                <span style={{ color: 'var(--on-surface-variant)', fontSize: '0.8125rem', lineHeight: 1.6, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  );
};

export default HowItWorksSection;
