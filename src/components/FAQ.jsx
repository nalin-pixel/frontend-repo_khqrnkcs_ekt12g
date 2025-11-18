import React, { useState } from 'react';

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yep. 14 days to poke around and feel the lift. No credit card required.',
  },
  {
    q: 'Do I need to change my tools?',
    a: "Nope. HelloPC slides into your workflow—no heavy lift, no new habits.",
  },
  {
    q: 'Will my agents hate this?',
    a: "Actually, they love it. Light touches, clear expectations, zero spam.",
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. No contracts, no hard feelings.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 sm:py-24" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>FAQ</h2>
        <div className="divide-y divide-slate-200 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <span className="font-medium" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{item.q}</span>
                  <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full text-white transition-transform ${isOpen ? 'rotate-45' : ''}`} style={{ backgroundColor: '#3A7DFF' }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-slate-600">{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
