import React from 'react';

const features = [
  {
    title: 'Agent check-ins',
    desc: "Lightweight pulses that keep momentum rolling without the micromanage.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    color: '#3A7DFF',
  },
  {
    title: 'Training reminders',
    desc: 'Gentle pings that get butts in seats without the nag.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7V3m8 4V3M4 11h16M5 19h14" strokeLinecap="round" />
      </svg>
    ),
    color: '#FF6F61',
  },
  {
    title: 'Communication logs',
    desc: 'Every text, call, and note—tidy and searchable. Zero guesswork.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#45D483',
  },
  {
    title: 'Accountability tracking',
    desc: 'Keep promises visible. Close loops fast. Celebrate progress.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h18v4H3zM7 7v14m5-14v14m5-14v14" strokeLinecap="round" />
      </svg>
    ),
    color: '#3A7DFF',
  },
];

const Features = () => {
  return (
    <section className="py-16 sm:py-24" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
          Keep your agents on track. Without the grind.
        </h2>
        <p className="text-slate-600 mb-10 max-w-2xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
          HelloPC does the nudging, logging, and following-up so you can coach like a human.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl p-5 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: f.color }}>
                <div className="text-white">{f.icon}</div>
              </div>
              <h3 className="font-semibold mb-1" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{f.title}</h3>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
