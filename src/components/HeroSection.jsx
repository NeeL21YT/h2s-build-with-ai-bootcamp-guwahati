import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const metricsRef = useRef(null);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;
    const fills = el.querySelectorAll('.bar-fill');
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) fills.forEach(b => { b.style.width = b.dataset.target; });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '4.5rem', overflow: 'hidden', background: 'var(--bg)' }}>

      {/* Ambient warm glow — top right */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,135,10,0.12) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      {/* Bottom left subtle glow */}
      <div style={{
        position: 'absolute', bottom: '0', left: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,200,66,0.06) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      {/* Horizontal rule across hero middle */}
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>

        {/* ── Left copy ── */}
        <div>
          <div className="eyebrow" style={{ marginBottom: '2rem' }}>
            <span className="eyebrow-dot" />
            Platform v3.7 · Now Generally Available
          </div>

          <h1 className="font-display" style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: 'var(--on-surface)', marginBottom: '1.5rem' }}>
            Deploy with
            <br />
            <span className="text-gold">Orbital&nbsp;Precision.</span>
          </h1>

          <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--on-surface-variant)', maxWidth: '28rem', marginBottom: '2.75rem', fontWeight: 400 }}>
            The enterprise infrastructure platform built for teams who demand zero-compromise performance, observability, and reliability at planetary scale.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <a href="#features" className="btn-gold" style={{ padding: '0.9375rem 2.25rem', fontSize: '0.9375rem' }}>
              Start your mission
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M3 7.5h9M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#telemetry" className="btn-outline" style={{ padding: '0.9375rem 2.25rem', fontSize: '0.9375rem' }}>
              View live dashboard
            </a>
          </div>

          {/* Key stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.05)', borderRadius: '0.875rem', overflow: 'hidden', maxWidth: '26rem' }}>
            {[
              { val: '99.99%', label: 'Uptime SLA' },
              { val: '<4 ms', label: 'P99 Latency' },
              { val: '180+', label: 'Global Nodes' },
            ].map((s, i) => (
              <div key={s.val} style={{ background: 'rgba(15,18,38,0.8)', padding: '1.25rem', textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#A855F7', lineHeight: 1 }}>{s.val}</div>
                <div className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.375rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right — Mission Dashboard ── */}
        <div ref={metricsRef} style={{ position: 'relative' }}>
          <div className="card-luxury" style={{ padding: '2rem', position: 'relative', overflow: 'visible' }}>
            {/* Top gold line */}
            <div style={{ position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.5), transparent)' }} />

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.75rem' }}>
              <div>
                <div className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>ORBITAL_CONSOLE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--on-surface)' }}>Mission Dashboard</div>
              </div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />LIVE
              </div>
            </div>

            {/* Primary KPI box */}
            <div style={{
              background: 'rgba(10, 11, 28, 0.9)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '0.875rem',
              padding: '1.75rem',
              textAlign: 'center',
              marginBottom: '1.75rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at top center, rgba(168,85,247,0.08) 0%, transparent 60%)' }} />
              <div className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--muted)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SYSTEM_EFFICIENCY</div>
              <div className="font-display text-gold" style={{ fontSize: '3.75rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.5rem' }}>99.9%</div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--on-surface-variant)' }}>All 12 clusters operating nominally</div>
            </div>

            {/* Metric rows */}
            {[
              { label: 'CPU_CORE_LOAD', val: '23%', pct: '23%' },
              { label: 'ORBITAL_BANDWIDTH', val: '847 Mbps', pct: '84%' },
              { label: 'PAYLOAD_QUEUE', val: '2,341 ops', pct: '47%' },
              { label: 'SHIELD_INTEGRITY', val: '100%', pct: '100%' },
            ].map(r => (
              <div key={r.label} style={{ marginBottom: '1.125rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                  <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>{r.label}</span>
                  <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--on-surface)', fontWeight: 600 }}>{r.val}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" data-target={r.pct} style={{ width: '0%' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Floating pill — top right */}
          <div style={{
            position: 'absolute', top: '-1.25rem', right: '-2rem',
            background: 'rgba(11,13,27,0.95)',
            border: '1px solid rgba(56,189,248,0.3)',
            borderRadius: '0.875rem',
            padding: '0.875rem 1.375rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(56,189,248,0.1)',
          }}>
            <div className="font-mono" style={{ fontSize: '0.5625rem', color: '#38BDF8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>LATENCY</div>
            <div className="font-display" style={{ fontSize: '1.625rem', fontWeight: 700, color: '#38BDF8' }}>3.8ms</div>
          </div>

          {/* Floating pill — bottom left */}
          <div style={{
            position: 'absolute', bottom: '2rem', left: '-2rem',
            background: 'rgba(11,13,27,0.95)',
            border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: '0.875rem',
            padding: '0.875rem 1.375rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(168,85,247,0.1)',
          }}>
            <div className="font-mono" style={{ fontSize: '0.5625rem', color: '#A855F7', letterSpacing: '0.12em', textTransform: 'uppercase' }}>ACTIVE_NODES</div>
            <div className="font-display text-gold" style={{ fontSize: '1.625rem', fontWeight: 700 }}>12,847</div>
          </div>
        </div>
      </div>

      {/* Fade bottom */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '8rem', background: 'linear-gradient(to top, var(--ink-950), transparent)', zIndex: 2 }} />
    </section>
  );
};

export default HeroSection;
