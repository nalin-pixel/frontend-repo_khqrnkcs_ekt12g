import React from 'react';

const quotes = [
  {
    text: "On it. This thing saves me hours of nudging each week.",
    name: 'Maya S.',
    role: 'Productivity Coach',
  },
  {
    text: "Attendance is up, and my notes are actually organized. Bless.",
    name: 'Jordan R.',
    role: 'Team Lead',
  },
  {
    text: "Agents feel supported and accountable—without me being the bad cop.",
    name: 'Avery K.',
    role: 'Coach',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(58,125,255,0.08),transparent_60%)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Loved by modern coaching teams</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex w-6 h-6 rounded-full items-center justify-center" style={{ backgroundColor: '#45D483' }}>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="white" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-xs font-medium text-slate-600">Verified user</span>
              </div>
              <p className="text-slate-700">{q.text}</p>
              <div className="mt-4">
                <p className="font-semibold" style={{ color: '#2E2E38', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{q.name}</p>
                <p className="text-sm text-slate-500">{q.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
