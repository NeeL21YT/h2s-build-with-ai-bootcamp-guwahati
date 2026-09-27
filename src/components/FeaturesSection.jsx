import React, { useEffect, useRef } from 'react';

const features = [
  { n: '01', icon: '◈', title: 'Orbital Data Fabric', desc: 'Distribute payloads across a globally meshed network with sub-millisecond synchronization and automatic failover routing.' },
  { n: '02', icon: '⬡', title: 'Quantum Encryption', desc: 'End-to-end post-quantum cryptographic algorithms protecting transmissions against both present and future adversaries.' },
  { n: '03', icon: '⚡', title: 'Hyperspeed Routing', desc: 'Continuous BGP path selection across 180+ global edge nodes, routing your traffic along the lowest-latency vector.' },
  { n: '04', icon: '◉', title: 'Real-Time Telemetry', desc: 'Microsecond-resolution observability with streaming dashboards, intelligent anomaly detection, and automated runbooks.' },
  { n: '05', icon: '⬧', title: 'AI Ops Engine', desc: 'Self-healing infrastructure powered by ML that predicts and resolves incidents before they surface to your end users.' },
  { n: '06', icon: '⬦', title: 'Infinite Scalability', desc: 'Elastic compute clusters that auto-scale from zero to petabyte-scale in seconds without performance degradation.' },
];

const FeaturesSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => e.isIntersecting && setTimeout(() => e.target.classList.add('visible'), i * 70));
    }, { threshold: 0.08 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" ref={ref} style={{ padding: '8rem 0', background: 'var(--bg)' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="reveal" style={{ marginBottom: '4.5rem', maxWidth: '580px' }}>
          <div className="eyebrow" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>PLATFORM CAPABILITIES</div>
          <h2 className="font-display" style={{ fontSize: '2.875rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--on-surface)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Built for missions that<br />
            <span className="text-gold" style={{  }}>cannot fail.</span>
          </h2>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.0625rem', lineHeight: 1.75, fontWeight: 300 }}>
            Every module is engineered to withstand the harshest conditions, keeping your operations running with absolute certainty.
          </p>
        </div>

        {/* 3-column grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem', overflow: 'hidden' }}>
          {features.map((f, i) => (
            <div key={f.n} className="feature-lx reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="feature-lx-number">{f.n}</div>

              <div className="icon-lx">
                <span style={{ fontSize: '1rem', color: 'var(--primary)' }}>{f.icon}</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 600, color: 'var(--on-surface)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.75, color: 'var(--on-surface-variant)', fontWeight: 300 }}>
                {f.desc}
              </p>

              {/* Bottom micro-rule on hover via CSS */}
              <div style={{ position: 'absolute', bottom: 0, left: '2rem', right: '2rem', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.3), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="card-rule-bottom" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
