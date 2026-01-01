
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-28 md:pt-32 md:pb-48 px-4 md:px-8">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-slate-900 border-2 border-slate-800 rounded mb-8">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Pasadena's Original Culture Hub</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic leading-[0.85]">
            Real <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500">
              Recognize <br /> Real.
            </span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-md font-medium leading-relaxed">
            The destination for 100% authenticated vintage heat, rare kicks, and the hard-to-find grails you missed. No fakes, no cap, just the archive.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="#archive" className="px-10 py-5 bg-yellow-400 text-slate-900 font-black uppercase tracking-tighter hover:bg-white transition-all transform hover:scale-105 shadow-[6px_6px_0px_0px_#8b5cf6]">
              Scout The Archive
            </a>
            <a href="#hustle" className="px-10 py-5 border-2 border-slate-700 font-black uppercase tracking-tighter hover:bg-slate-800 transition-all text-white">
              The Mission
            </a>
          </div>
        </div>

        <div className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-purple-600 rounded-[2rem] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
          <div className="relative rounded-[2rem] border-4 border-slate-800 shadow-2xl overflow-hidden bg-slate-900 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop" 
              alt="Hype Culture" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-[10px] font-black uppercase text-yellow-400 mb-2 tracking-widest">Featured Specimen // 001</div>
              <div className="text-2xl font-black uppercase italic text-white leading-none">Ghost Retro '85</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
