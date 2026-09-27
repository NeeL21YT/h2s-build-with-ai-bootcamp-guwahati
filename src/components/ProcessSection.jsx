import React, { useEffect, useRef, useState } from 'react';

const phases = [
  {
    phase: 'PHASE 01',
    title: 'Onboard',
    duration: '< 1 hour',
    color: '#A855F7',
    steps: [
      'Connect your cloud provider or on-prem cluster via native integration',
      'LaunchPad auto-discovers your services, nodes, and topology',
      'Baseline telemetry begins streaming within minutes',
    ],
  },
  {
    phase: 'PHASE 02',
    title: 'Configure',
    duration: '1–2 hours',
    color: '#38BDF8',
    steps: [
      'Define deployment strategies: blue-green, canary, or rolling',
      'Set SLA thresholds, latency budgets, and alerting policies',
      'Map your CI/CD pipeline with one-click GitHub or ArgoCD sync',
    ],
  },
  {
    phase: 'PHASE 03',
    title: 'Deploy',
    duration: 'Ongoing',
    color: '#C084FC',
    steps: [
      'Trigger deployments from your terminal, dashboard, or CI pipeline',
      'Traffic shifts gradually with real-time health checks at each step',
      'Automatic rollback fires instantly if error rate exceeds your threshold',
    ],
  },
  {
    phase: 'PHASE 04',
    title: 'Operate',
    duration: 'Continuous',
    color: '#A855F7',
    steps: [
      'AI Ops Engine monitors every cluster and surfaces anomalies proactively',
      'Runbooks execute automatically on known failure signatures',
      'Full audit trail and post-incident reports generated automatically',
    ],
  },
];

const ProcessSection = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => e.isIntersecting && setTimeout(() => e.target.classList.add('visible'), i * 60));
    }, { threshold: 0.08 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  const current = phases[active];

  return (
    <section id="process" ref={ref} style={{ padding: '8rem 0', background: 'var(--bg)', position: 'relative' }}>
      <div className="rule" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', left: '-5%', bottom: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.09) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end', marginBottom: '4.5rem' }}>
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>THE PROCESS</div>
            <h2 className="font-display reveal" style={{ fontSize: '2.875rem', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--on-surface)', lineHeight: 1.1, margin: 0 }}>
              From setup to fully<br />
              <span className="text-gold">operational.</span>
            </h2>
          </div>
          <p className="reveal" style={{ color: 'var(--on-surface-variant)', fontSize: '1.0625rem', lineHeight: 1.8, fontWeight: 300, alignSelf: 'end' }}>
            LaunchPad is engineered to become your command center within the hour. Here's exactly how it goes — from first connection to fully autonomous operations.
          </p>
        </div>

        {/* Phase selector + detail */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '1.5rem', alignItems: 'stretch' }}>

          {/* Left — phase tabs */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {phases.map((p, i) => (
              <button
                key={p.phase}
                onClick={() => setActive(i)}
                style={{
                  padding: '1.125rem 1.375rem',
                  borderRadius: '0.875rem',
                  border: '1px solid',
                  borderColor: active === i ? `${p.color}50` : 'rgba(255,255,255,0.06)',
                  background: active === i ? `${p.color}0D` : 'rgba(15,18,38,0.5)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.25s ease',
                  boxShadow: active === i ? `0 0 24px -6px ${p.color}40` : 'none',
                }}
              >
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: active === i ? p.color : 'rgba(255,255,255,0.12)',
                  boxShadow: active === i ? `0 0 8px ${p.color}` : 'none',
                  flexShrink: 0,
                  transition: 'all 0.25s',
                }} />
                <div>
                  <div className="font-mono" style={{ fontSize: '0.5625rem', color: active === i ? p.color : 'var(--muted)', letterSpacing: '0.12em', marginBottom: '0.2rem', textTransform: 'uppercase' }}>
                    {p.phase}
                  </div>
                  <div className="font-display" style={{ fontSize: '1rem', fontWeight: 700, color: active === i ? 'var(--on-surface)' : 'var(--muted)', transition: 'color 0.25s' }}>
                    {p.title}
                  </div>
                </div>
                <div className="font-mono" style={{ marginLeft: 'auto', fontSize: '0.5625rem', color: active === i ? p.color : 'rgba(255,255,255,0.15)', letterSpacing: '0.06em' }}>
                  {p.duration}
                </div>
              </button>
            ))}
          </div>

          {/* Right — detail panel */}
          <div className="reveal" style={{
            background: 'rgba(15,18,38,0.65)',
            border: `1px solid ${current.color}30`,
            borderRadius: '1.25rem',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(16px)',
            transition: 'border-color 0.3s ease',
            transitionDelay: '40ms',
          }}>
            {/* Top accent line */}
            <div style={{
              position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px',
              background: `linear-gradient(90deg, transparent, ${current.color}80, transparent)`,
            }} />

            {/* Ambient blob */}
            <div style={{
              position: 'absolute', top: '-20%', right: '-10%',
              width: '300px', height: '300px', borderRadius: '50%',
              background: `radial-gradient(circle, ${current.color}12 0%, transparent 65%)`,
              filter: 'blur(40px)', pointerEvents: 'none',
            }} />

            <div className="font-mono" style={{ fontSize: '0.5625rem', color: current.color, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              {current.phase}
            </div>
            <div className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--on-surface)', marginBottom: '0.375rem', letterSpacing: '-0.02em' }}>
              {current.title}
            </div>
            <div className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
              TIMELINE: {current.duration}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {current.steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0,
                    background: `${current.color}1A`,
                    border: `1px solid ${current.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: '0.125rem',
                  }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-4" stroke={current.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', lineHeight: 1.7, margin: 0, fontWeight: 300 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  );
};

export default ProcessSection;
