import React from 'react';

const steps = [
  {
    title: 'Set your rhythm',
    desc: 'Pick your check-in cadence and the rules of engagement. Quick setup, big payoff.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8v4l3 3" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'HelloPC does the nudging',
    desc: "We'll ping them for you. Training reminders, gentle follow-ups, clean logs.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 8l9-5 9 5v6a9 9 0 0 1-18 0V8z" />
      </svg>
    ),
  },
  {
    title: 'Coach with clarity',
    desc: 'See who’s on track, who needs a nudge, and what happened—at a glance.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h3m4 0h11M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-16 sm:py-24 bg-[radial-gradient(60%_60%_at_100%_0%,rgba(69,212,131,0.08),transparent_60%)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>How it works</h2>
        <p className="text-slate-600 mb-10" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Three simple steps. Zero busywork.</p>
        <div className="grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#3A7DFF', color: 'white' }}>
                {s.icon}
              </div>
              <h3 className="font-semibold mb-1" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{s.title}</h3>
              <p className="text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
