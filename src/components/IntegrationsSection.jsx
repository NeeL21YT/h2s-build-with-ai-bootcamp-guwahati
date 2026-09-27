import React, { useEffect, useRef } from 'react';

const integrations = [
  { name: 'Kubernetes', cat: 'ORCHESTRATION' },
  { name: 'Terraform', cat: 'INFRA-AS-CODE' },
  { name: 'Prometheus', cat: 'MONITORING' },
  { name: 'Grafana', cat: 'VISUALIZATION' },
  { name: 'GitHub', cat: 'CI / CD' },
  { name: 'HashiCorp Vault', cat: 'SECRETS' },
  { name: 'Istio', cat: 'SERVICE MESH' },
  { name: 'ArgoCD', cat: 'GITOPS' },
  { name: 'Datadog', cat: 'OBSERVABILITY' },
  { name: 'PagerDuty', cat: 'ALERTING' },
  { name: 'Slack', cat: 'NOTIFICATIONS' },
  { name: 'Amazon AWS', cat: 'CLOUD PROVIDER' },
];

const IntegrationsSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => e.isIntersecting && setTimeout(() => e.target.classList.add('visible'), i * 40));
    }, { threshold: 0.08 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="integrations" ref={ref} style={{ padding: '8rem 0', background: 'var(--bg)' }}>
      <div className="container-xl">

        <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow reveal" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>INTEGRATIONS</div>
          <h2 className="font-display reveal" style={{ fontSize: '2.625rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--on-surface)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Fits your stack,<br />
            <span className="text-gold" style={{  }}>exactly.</span>
          </h2>
          <p className="reveal" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, fontWeight: 300 }}>
            LaunchPad connects natively with every tool you already trust — no friction, no rip-and-replace.
          </p>
        </div>

        {/* 4-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem', overflow: 'hidden', marginBottom: '3.5rem' }}>
          {integrations.map((intg, i) => (
            <div
              key={intg.name}
              className="reveal"
              style={{
                background: 'var(--surface)',
                padding: '1.375rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                transitionDelay: `${i * 35}ms`,
                cursor: 'default',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-mid)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--surface)'}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '0.5rem', flexShrink: 0,
                background: 'rgba(168,85,247,0.07)',
                border: '1px solid rgba(168,85,247,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontSize: '0.8125rem', fontWeight: 700,
                color: 'var(--primary)',
              }}>
                {intg.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--on-surface)', fontFamily: 'var(--font-body)' }}>{intg.name}</div>
                <div className="font-mono" style={{ fontSize: '0.5625rem', color: 'var(--muted)', letterSpacing: '0.08em' }}>{intg.cat}</div>
              </div>
            </div>
          ))}
        </div>

        {/* API strip */}
        <div className="reveal" style={{
          background: 'rgba(22, 20, 15, 0.8)',
          border: '1px solid rgba(168, 85, 247, 0.15)',
          borderRadius: '0.875rem',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: 'blur(16px)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--on-surface)', marginBottom: '0.25rem' }}>
              Don't see your tool?
            </div>
            <div style={{ fontSize: '0.9375rem', color: 'var(--on-surface-variant)', fontWeight: 300 }}>
              Our open REST API makes it trivial to build custom connectors.
            </div>
          </div>
          <a href="#" className="btn-outline">Browse API Docs →</a>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
