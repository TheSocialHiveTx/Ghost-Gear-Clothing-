
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 border-b border-purple-500/10 px-4 md:px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center border-4 border-slate-900 shadow-[4px_4px_0px_0px_#8b5cf6]">
            <i className="fa-solid fa-ghost text-slate-900 text-2xl"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase italic leading-none">
              Ghost <span className="text-purple-500">Gear</span>
            </span>
            <span className="text-[9px] font-black uppercase text-yellow-400 tracking-[0.3em]">Hustle x Culture</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 font-black uppercase text-[10px] tracking-widest">
          <a href="#hustle" className="hover:text-yellow-400 transition-all hover:translate-y-[-2px]">The Hustle</a>
          <a href="#archive" className="hover:text-yellow-400 transition-all hover:translate-y-[-2px]">The Archive</a>
          <a href="#hq" className="hover:text-yellow-400 transition-all hover:translate-y-[-2px]">HQ Base</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-5 py-2 bg-slate-800 border border-slate-700 text-[10px] font-black uppercase tracking-widest rounded hover:bg-purple-600 transition-all">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
