
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { TreeState } from './types';

const App: React.FC = () => {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.CHAOS);

  const toggleState = () => {
    setTreeState((prev) => (prev === TreeState.CHAOS ? TreeState.FORMED : TreeState.CHAOS));
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Canvas */}
      <Canvas
        shadows
        gl={{ antialias: true, stencil: false, depth: true }}
        dpr={[1, 2]}
      >
        <Experience treeState={treeState} />
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between p-8 md:p-12">
        <header className="flex justify-between items-start animate-fade-in">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#e6c864] via-[#ffffff] to-[#e6c864]">
              LUXURY GOLD
            </h1>
            <p className="text-[#e6c864]/60 font-medium tracking-widest uppercase text-xs md:text-sm mt-2">
              Interactive 3D Experience • Est. 2024
            </p>
          </div>
          <div className="pointer-events-auto">
             <div className="w-12 h-12 rounded-full border border-[#e6c864]/30 flex items-center justify-center backdrop-blur-md">
                <span className="text-[#e6c864] text-xl">✨</span>
             </div>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center text-center">
            {/* Minimalist central hint if needed */}
        </main>

        <footer className="flex flex-col md:flex-row justify-between items-end gap-6 animate-slide-up">
          <div className="max-w-xs text-left">
             <h2 className="text-[#e6c864] font-bold text-lg mb-1">State Morphing</h2>
             <p className="text-white/40 text-sm leading-relaxed">
               Witness the transition from chaos to a structured holiday masterpiece. 
               Powered by high-precision shaders and dual-coordinate interpolation.
             </p>
          </div>

          <div className="flex gap-4 pointer-events-auto">
            <button
              onClick={toggleState}
              className={`
                px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-500
                border-2 shadow-2xl
                ${treeState === TreeState.CHAOS 
                  ? 'bg-[#e6c864] text-black border-[#e6c864] hover:bg-white hover:border-white' 
                  : 'bg-transparent text-[#e6c864] border-[#e6c864]/50 hover:bg-[#e6c864]/10 hover:border-[#e6c864]'}
              `}
            >
              {treeState === TreeState.CHAOS ? 'Form the Tree' : 'Release Chaos'}
            </button>
            
            <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
              <div className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Atmosphere</span>
                <span className="text-[#e6c864] text-sm font-black uppercase">
                   {treeState === TreeState.CHAOS ? 'Stochastic' : 'Ordered'}
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Decorative Golden Vignette */}
      <div className="absolute inset-0 pointer-events-none ring-[40px] ring-black ring-inset opacity-50"></div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { animation: slide-up 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default App;
