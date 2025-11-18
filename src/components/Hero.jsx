import React from "react";

const Logo = () => {
  return (
    <div className="inline-flex items-end gap-1 select-none">
      <span className="text-3xl sm:text-4xl font-bold leading-none" style={{ color: "#3A7DFF", fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Hello</span>
      <span className="text-3xl sm:text-4xl font-bold leading-none" style={{ color: "#45D483", fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>PC</span>
    </div>
  );
};

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-90 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(58,125,255,0.20),transparent_60%),radial-gradient(50%_50%_at_90%_10%,rgba(69,212,131,0.15),transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 sm:pt-16">
        <div className="flex items-center justify-between">
          <Logo />
          <a href="#pricing" className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-white text-sm font-bold shadow-md transition-transform duration-200 focus:outline-none" style={{ backgroundColor: '#FF6F61', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            View Pricing
          </a>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm px-3 py-1 rounded-full bg-white/70 backdrop-blur text-slate-700 shadow-sm">
              <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#45D483' }} />
              On it. Your friendly sidekick just clocked in.
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold" style={{ color: '#3A7DFF', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
              The assistant every Productivity Coach wished they had.
            </h1>
            
            <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
              Keep your agents on track. Without the grind. HelloPC checks in, nudges attendance, and keeps a tidy log of every touch.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center rounded-xl px-6 py-3 text-white font-bold shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition duration-200" style={{ backgroundColor: '#3A7DFF', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
                Start free trial
              </a>
              <a href="#how" className="inline-flex justify-center items-center rounded-xl px-6 py-3 text-white font-bold shadow hover:-translate-y-0.5 active:translate-y-0 transition duration-200" style={{ backgroundColor: '#FF6F61', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
                See how it works
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#45D483' }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                Accountability, made easy
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#45D483' }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                    <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                14-day free trial
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md bg-white rounded-3xl shadow-2xl ring-1 ring-slate-900/5 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#3A7DFF' }}>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18"/></svg>
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Agent Check-ins</p>
                    <p className="text-slate-500 text-sm">Quick pulses, instant clarity.</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { title: 'Training reminders', color: '#3A7DFF' },
                    { title: 'Attendance nudges', color: '#FF6F61' },
                    { title: 'Communication log', color: '#45D483' },
                    { title: 'Accountability tracking', color: '#3A7DFF' },
                  ].map((card, i) => (
                    <div key={i} className="rounded-2xl p-4 shadow-sm border border-slate-100" style={{ backgroundColor: '#F9FAFB' }}>
                      <p className="text-sm font-medium" style={{ color: '#2E2E38' }}>{card.title}</p>
                      <div className="mt-3 h-2 rounded-full" style={{ background: `linear-gradient(90deg, ${card.color} 0%, rgba(58,125,255,0.15) 100%)` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl blur-2xl opacity-50" style={{ background: 'linear-gradient(135deg,#3A7DFF, #45D483)' }} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
