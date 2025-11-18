import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-12 pb-16 bg-white/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-end gap-1 select-none mb-2">
              <span className="text-2xl font-bold leading-none" style={{ color: '#3A7DFF', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Hello</span>
              <span className="text-2xl font-bold leading-none" style={{ color: '#45D483', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>PC</span>
            </div>
            <p className="text-slate-600 text-sm max-w-sm">Accountability, made easy. Friendly vibes, serious follow-through.</p>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-800">Features</a>
            <a href="#how" className="hover:text-slate-800">How it works</a>
            <a href="#pricing" className="hover:text-slate-800">Pricing</a>
            <a href="#faq" className="hover:text-slate-800">FAQ</a>
          </nav>

          <div className="text-center sm:text-right">
            <a href="#pricing" className="inline-flex items-center rounded-xl px-5 py-3 text-white font-bold shadow-md hover:-translate-y-0.5 transition" style={{ backgroundColor: '#3A7DFF', fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Start free trial</a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} HelloPC. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
