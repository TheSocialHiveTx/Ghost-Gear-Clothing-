
import React from 'react';
import { STORE_INFO } from '../constants';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-32 px-4 md:px-8 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-4 mb-10">
              <h2 className="text-5xl font-black uppercase italic mb-2 tracking-tighter">
                The <span className="text-yellow-400">HQ Crib</span>
              </h2>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">// Pasadena's Authentic Outpost</p>
            </div>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <i className="fa-solid fa-map-pin text-purple-500 text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-500 uppercase tracking-widest text-[10px] mb-2">Location Coordinates</h4>
                  <p className="text-xl text-white font-bold tracking-tight">{STORE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <i className="fa-solid fa-clock text-yellow-400 text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-500 uppercase tracking-widest text-[10px] mb-2">Operation Hours</h4>
                  <p className="text-xl text-white font-bold italic uppercase">{STORE_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-slate-900 border-2 border-slate-800 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <i className="fa-solid fa-comment-dots text-purple-500 text-2xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-slate-500 uppercase tracking-widest text-[10px] mb-2">Hit the Line</h4>
                  <p className="text-xl text-white font-mono font-bold">{STORE_INFO.phone}</p>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex flex-wrap gap-4">
                  {STORE_INFO.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3 bg-slate-900 border-2 border-slate-800 px-5 py-2.5 rounded-xl">
                      <i className="fa-solid fa-bolt text-yellow-400 text-[10px]"></i>
                      <span className="text-[10px] font-black uppercase text-slate-200 tracking-widest">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 h-[500px] bg-slate-900 rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-slate-800 group">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              alt="Store Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-slate-950/80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-12 bg-purple-500 rounded-full blur-3xl animate-pulse opacity-20"></div>
                <div className="relative w-24 h-24 bg-slate-950 rounded-3xl flex items-center justify-center border-4 border-yellow-400 shadow-[0_0_30px_#facc1555] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <i className="fa-solid fa-ghost text-yellow-400 text-4xl"></i>
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 right-10 bg-slate-950/90 p-8 border-2 border-purple-500/20 backdrop-blur-2xl rounded-[2rem] shadow-2xl">
              <p className="text-[10px] font-black text-yellow-400 mb-3 uppercase tracking-[0.4em]">AUTHENTICITY HUB // HOUSTON-METRO</p>
              <button className="w-full bg-yellow-400 text-slate-900 py-4 font-black uppercase tracking-tighter text-lg hover:bg-white transition-all transform active:scale-95 shadow-lg">
                Pull Up To The Set
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
