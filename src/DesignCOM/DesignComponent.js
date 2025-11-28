import React from 'react';
import AIInputForm from './AIInputForm';

const DesignComponent = ({ compact = false, className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[#050508] ${className}`}>
      {/* Abstract Background Elements - Ethereal Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-purple-500/10 rounded-full blur-[100px] animate-pulse duration-[4s]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[35vw] h-[35vw] bg-blue-500/10 rounded-full blur-[100px] animate-pulse duration-[5s] delay-700" />
        <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[50vw] h-[50vw] bg-[#fff230]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center min-h-[700px]">
        
        {/* Hero Text Section with Modern Typography */}
        <div className="text-center mb-12 md:mb-20 relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/70 hover:bg-white/10 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#fff230] animate-pulse"></span>
            <span>Next-Gen AI Design Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
            Your imagination, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff230] via-[#fff230] to-yellow-200 drop-shadow-[0_0_30px_rgba(255,242,48,0.3)]">
              our conversation.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Design smarter with an AI that listens, understands, and transforms your words into reality.
          </p>
        </div>

        {/* Floating Glass Interface */}
        <div className="w-full max-w-5xl relative group perspective-1000">
            {/* Ambient Glow behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fff230]/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
            
            <div className="relative bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl ring-1 ring-white/5 overflow-hidden">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-10">
                    {/* Input Section */}
                    <div className="w-full transform transition-all duration-300 hover:scale-[1.01]">
                        <AIInputForm />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default DesignComponent;
