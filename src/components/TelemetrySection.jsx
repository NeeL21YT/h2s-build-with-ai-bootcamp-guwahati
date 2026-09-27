import React, { useEffect, useRef } from 'react';

const rows = [
  { id: 'CLUSTER_ALPHA_01', region: 'US-EAST-1', uptime: '99.99%', latency: '1.2 ms', status: 'NOMINAL' },
  { id: 'CLUSTER_BETA_07',  region: 'EU-WEST-3', uptime: '99.98%', latency: '3.4 ms', status: 'NOMINAL' },
  { id: 'CLUSTER_GAMMA_12', region: 'AP-NE-1',   uptime: '100.0%', latency: '5.1 ms', status: 'OPTIMAL' },
  { id: 'CLUSTER_DELTA_03', region: 'SA-EAST-1', uptime: '99.97%', latency: '8.7 ms', status: 'NOMINAL' },
  { id: 'CLUSTER_OMEGA_02', region: 'GLOBAL-PoP', uptime: '99.99%', latency: '2.9 ms', status: 'NOMINAL' },
];

const TelemetrySection = () => {
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

  return (
    <section id="telemetry" ref={ref} style={{ padding: '8rem 0', background: 'var(--surface)', position: 'relative' }}>
      <div className="rule" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
      <div className="rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />

      {/* Subtle warm glow */}
      <div style={{
        position: 'absolute', left: '-5%', top: '30%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,135,10,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-xl">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>LIVE TELEMETRY</div>
            <h2 className="font-display reveal" style={{ fontSize: '2.625rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--on-surface)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Total situational<br />
              <span className="text-gold" style={{ fontStyle: 'italic' }}>awareness.</span>
            </h2>
            <p className="reveal" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '3rem', fontWeight: 300 }}>
              Monitor every cluster, every region, every millisecond. Our global observability fabric gives you complete operational clarity without ever leaving your command center.
            </p>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { val: '180+', label: 'Active Orbital Nodes', pct: '100%' },
                { val: '4.2 PB', label: 'Daily Data Processed', pct: '90%' },
                { val: '12 ms', label: 'Mean Alert Response', pct: '60%' },
              ].map((s, i) => (
                <div key={s.val} className="stat-pill reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
                    <span className="font-display" style={{ fontSize: '1.375rem', fontWeight: 600, color: 'var(--primary)' }}>{s.val}</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: s.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — terminal console */}
          <div className="reveal">
            <div className="console-wrap">
              {/* Terminal bar */}
              <div className="console-bar">
                <div style={{ display: 'flex', gap: '0.375rem' }}>
                  <div className="console-dot" style={{ background: '#FF5F56' }} />
                  <div className="console-dot" style={{ background: '#FFBD2E' }} />
                  <div className="console-dot" style={{ background: '#27C93F' }} />
                </div>
                <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>
                  orbital-console — cluster-watch
                </span>
                <div style={{ marginLeft: 'auto' }} className="eyebrow">
                  <span className="eyebrow-dot" />LIVE
                </div>
              </div>

              {/* Column headers */}
              <div className="font-mono" style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.2fr 0.9fr 0.9fr 1fr',
                padding: '0.75rem 1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                fontSize: '0.5625rem',
                color: 'var(--muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                <span>CLUSTER_ID</span><span>REGION</span><span>UPTIME</span><span>LATENCY</span><span>STATUS</span>
              </div>

              {rows.map(r => (
                <div key={r.id}
                  className="tele-row-lx"
                  style={{ gridTemplateColumns: '2fr 1.2fr 0.9fr 0.9fr 1fr' }}
                >
                  <span style={{ color: 'var(--on-surface)', fontWeight: 500 }}>{r.id}</span>
                  <span style={{ color: 'var(--muted)' }}>{r.region}</span>
                  <span style={{ color: '#4ADE80' }}>{r.uptime}</span>
                  <span style={{ color: 'var(--primary)' }}>{r.latency}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: r.status === 'OPTIMAL' ? '#4ADE80' : 'var(--primary)' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: r.status === 'OPTIMAL' ? '#4ADE80' : 'var(--primary)', boxShadow: `0 0 6px ${r.status === 'OPTIMAL' ? '#4ADE80' : 'var(--primary)'}` }} />
                    {r.status}
                  </span>
                </div>
              ))}

              <div style={{ padding: '0.875rem 1.5rem', background: 'rgba(10,9,7,0.6)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="font-mono" style={{ fontSize: '0.625rem', color: 'var(--muted)' }}>
                  <span style={{ color: '#4ADE80' }}>●</span>&nbsp; 5 clusters healthy · Last polled:&nbsp;
                  <span style={{ color: 'var(--primary)' }}>just now</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemetrySection;
