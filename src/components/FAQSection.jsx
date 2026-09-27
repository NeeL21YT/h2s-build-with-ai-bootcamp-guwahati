import React, { useEffect, useRef, useState } from 'react';

const faqs = [
  {
    q: 'What cloud providers does LaunchPad support?',
    a: 'LaunchPad natively supports AWS, Google Cloud, and Azure. It also works with any Kubernetes-based environment, including on-premise clusters and bare-metal setups running K3s or similar distributions.',
  },
  {
    q: 'How long does onboarding take?',
    a: 'Most teams are fully operational within one hour. Service discovery and baseline telemetry start streaming within minutes of connecting your first cluster. No professional services engagement required.',
  },
  {
    q: 'What deployment strategies are supported?',
    a: 'Blue-green, canary, rolling, and feature flag-gated deployments are all first-class strategies in LaunchPad. You can define custom traffic-shift curves and health-check gates per service.',
  },
  {
    q: 'How does the AI Ops Engine work?',
    a: 'The AI Ops Engine continuously models your system\'s normal behaviour and flags deviations. When a known failure signature is detected, it auto-executes your pre-configured runbook. Novel anomalies are surfaced for human review with full context.',
  },
  {
    q: 'What is the uptime SLA on the Orbital Pro plan?',
    a: 'Orbital Pro carries a 99.99% uptime SLA backed by a Service Credit Agreement. Enterprise plans can negotiate custom SLAs up to 99.999% with dedicated cluster isolation.',
  },
  {
    q: 'Is my infrastructure data stored on LaunchPad servers?',
    a: 'Telemetry metadata is processed in our secure multi-tenant pipeline. Raw payload data never leaves your cluster. All control-plane traffic is encrypted in transit using TLS 1.3 and at rest using AES-256.',
  },
  {
    q: 'Can I run LaunchPad on-premise?',
    a: 'Yes. Enterprise plans include an on-premise deployment option where the entire LaunchPad control plane runs inside your own VPC or data center. Air-gapped environments are also supported.',
  },
  {
    q: 'How does pricing scale with team size?',
    a: 'The Launchpad and Orbital Pro plans are per-workspace, not per-seat — so your whole team works from one plan. Enterprise pricing is custom and based on cluster count and data throughput, not headcount.',
  },
];

const FAQItem = ({ faq, isLast }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid rgba(255,255,255,0.05)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.375rem 1.75rem',
          background: open ? 'rgba(168,85,247,0.04)' : 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1.5rem',
          transition: 'background 0.2s',
        }}
      >
        <span className="font-display" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--on-surface)', letterSpacing: '-0.01em', lineHeight: 1.4 }}>
          {faq.q}
        </span>
        <span style={{
          width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
          border: `1.5px solid ${open ? 'rgba(168,85,247,0.6)' : 'rgba(255,255,255,0.1)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? 'var(--primary)' : 'var(--muted)',
          fontSize: '1rem', lineHeight: 1,
          transition: 'all 0.25s',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>+</span>
      </button>

      <div style={{
        maxHeight: open ? '200px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}>
        <p style={{
          padding: '0 1.75rem 1.5rem',
          fontSize: '0.9375rem',
          color: 'var(--on-surface-variant)',
          lineHeight: 1.8,
          fontWeight: 300,
          margin: 0,
        }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
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

  const half = Math.ceil(faqs.length / 2);

  return (
    <section id="faq" ref={ref} style={{ padding: '8rem 0', background: 'var(--surface)', position: 'relative' }}>
      <div className="rule" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />

      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 60%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end', marginBottom: '4.5rem' }}>
          <div>
            <div className="eyebrow reveal" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>FAQ</div>
            <h2 className="font-display reveal" style={{ fontSize: '2.875rem', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--on-surface)', lineHeight: 1.1, margin: 0 }}>
              Everything you<br />
              <span className="text-gold">need to know.</span>
            </h2>
          </div>
          <p className="reveal" style={{ color: 'var(--on-surface-variant)', fontSize: '1.0625rem', lineHeight: 1.8, fontWeight: 300, alignSelf: 'end' }}>
            Common questions about LaunchPad — from infrastructure compatibility and deployment strategies to security, pricing, and SLAs.
          </p>
        </div>

        {/* 2-column accordion */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', alignItems: 'start' }}>
          <div className="reveal" style={{ background: 'rgba(15,18,38,0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', overflow: 'hidden' }}>
            {faqs.slice(0, half).map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} isLast={i === half - 1} />
            ))}
          </div>
          <div className="reveal" style={{ background: 'rgba(15,18,38,0.6)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1rem', overflow: 'hidden', transitionDelay: '80ms' }}>
            {faqs.slice(half).map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} isLast={i === faqs.length - half - 1} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.9375rem', marginBottom: '1.25rem', fontWeight: 300 }}>
            Have a more specific question?
          </p>
          <a href="#" className="btn-outline" style={{ display: 'inline-flex' }}>Talk to our team →</a>
        </div>
      </div>

      <div className="rule" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </section>
  );
};

export default FAQSection;
