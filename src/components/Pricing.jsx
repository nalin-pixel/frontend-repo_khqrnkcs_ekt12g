import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: 'mo',
    popular: false,
    features: ['Up to 25 agents', 'Agent check-ins', 'Training reminders', 'Basic logs'],
  },
  {
    name: 'Pro',
    price: '$39',
    period: 'mo',
    popular: true,
    features: ['Up to 75 agents', 'Everything in Starter', 'Accountability tracking', 'Priority support'],
  },
  {
    name: 'Enterprise',
    price: 'Let’s chat',
    period: '',
    popular: false,
    features: ['Unlimited agents', 'SSO & advanced security', 'Custom reporting', 'Dedicated success manager'],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Simple, transparent pricing</h2>
        <p className="text-slate-600 mb-10" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Start free. Upgrade when you feel the lift.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-3xl p-6 border shadow-sm bg-white ${t.popular ? 'ring-2' : ''}`} style={{ borderColor: t.popular ? '#3A7DFF' : '#e5e7eb' }}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{t.name}</h3>
                {t.popular && (
                  <span className="text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#FF6F61', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Most popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{t.price}</span>
                {t.period && <span className="text-slate-500 mb-1">/{t.period}</span>}
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600">
                    <span className="inline-flex w-5 h-5 rounded-full items-center justify-center" style={{ backgroundColor: '#45D483' }}>
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="white" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className="w-full inline-flex justify-center items-center rounded-xl px-5 py-3 text-white font-bold shadow-md hover:-translate-y-0.5 transition" style={{ backgroundColor: t.popular ? '#3A7DFF' : '#FF6F61', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
                  {t.name === 'Enterprise' ? 'Contact sales' : 'Start free trial'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
