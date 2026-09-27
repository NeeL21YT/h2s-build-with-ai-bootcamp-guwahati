import React, { useEffect, useRef } from 'react';

const plans = [
  {
    id: 'LAUNCH',
    name: 'Launchpad',
    price: '$49',
    period: '/ month',
    desc: 'For solo engineers and small teams exploring the platform.',
    features: ['100 GB Orbital Storage', '5 Active Clusters', 'Standard Telemetry', 'Community Support', 'REST API Access'],
    cta: 'Start free',
    featured: false,
  },
  {
    id: 'ORBITAL',
    name: 'Orbital Pro',
    price: '$199',
    period: '/ month',
    desc: 'For high-growth teams operating at interplanetary scale.',
    features: ['Unlimited Storage', 'Unlimited Clusters', 'Real-Time Analytics', 'Priority Routing Engine', '24/7 Command Center', 'AI Ops Engine (beta)'],
    cta: 'Begin mission',
    featured: true,
  },
  {
    id: 'ENTERPRISE',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Dedicated infrastructure and SLAs for mission-critical operations.',
    features: ['Dedicated Orbital Clusters', 'Custom SLA (99.999%)', 'On-Premise Deployment', 'SSO & Advanced RBAC', 'Dedicated Support Engineer'],
    cta: 'Contact Sales',
    featured: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => e.isIntersecting && setTimeout(() => e.target.classList.add('visible'), i * 80));
    }, { threshold: 0.08 });
    items.forEach(i => obs.observe(i));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} style={{ padding: '8rem 0', background: 'var(--surface)', position: 'relative' }}>
      <div className="rule" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      {/* Gold ambient */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 60%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto 4.5rem' }}>
          <div className="eyebrow reveal" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>PRICING</div>
          <h2 className="font-display reveal" style={{ fontSize: '2.625rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--on-surface)', lineHeight: 1.15, marginBottom: '1rem' }}>
            Plans for every<br />
            <span className="text-gold" style={{  }}>orbit.</span>
          </h2>
          <p className="reveal" style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, fontWeight: 300 }}>
            Start free, scale infinitely. No hidden fees, no deployment surprises.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', alignItems: 'center' }}>
          {plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`reveal ${plan.featured ? 'plan-card featured' : 'plan-card'}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                transform: plan.featured ? 'scale(1.04)' : 'scale(1)',
              }}
            >
              {plan.featured && (
                <div style={{
                  position: 'absolute', top: '-1px', left: '50%', transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(90deg, #7C3AED, #A855F7, #7C3AED)',
                  color: 'var(--bg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.14em',
                  padding: '0.3rem 1rem', borderRadius: '9999px', whiteSpace: 'nowrap',
                  boxShadow: '0 0 20px rgba(56,189,248,0.5)',
                }}>
                  MOST POPULAR
                </div>
              )}

              <div className="font-mono" style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: plan.featured ? 'var(--primary)' : 'var(--muted)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                {plan.id}
              </div>
              <div className="font-display" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--on-surface)', marginBottom: '0.375rem' }}>{plan.name}</div>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginBottom: '2rem', lineHeight: 1.65, fontWeight: 300 }}>{plan.desc}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.375rem', marginBottom: '2rem' }}>
                <span className="font-display text-gold" style={{ fontSize: plan.price === 'Custom' ? '2rem' : '2.75rem', fontWeight: 700 }}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{plan.period}</span>
                )}
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: plan.featured ? 'var(--on-surface)' : 'var(--on-surface-variant)', fontWeight: 300 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="8" cy="8" r="7.5" stroke={plan.featured ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.08)'} />
                      <path d="M5 8l2 2 4-4" stroke={plan.featured ? 'var(--primary)' : 'var(--muted)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.featured ? (
                <button className="btn-gold" style={{ width: '100%', justifyContent: 'center', padding: '0.9375rem' }}>
                  {plan.cta}
                </button>
              ) : (
                <button className="btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '0.9375rem' }}>
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
