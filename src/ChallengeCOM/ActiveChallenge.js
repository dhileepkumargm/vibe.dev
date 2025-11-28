import React, { useState, useCallback } from 'react';

export default function ActiveChallenge({ challenge }) {
  const [liked, setLiked] = useState(false);
  
  const defaultChallenge = {
    title: 'Retro Arcade Game Creator',
    subtitle: 'Craft a browser game from the 80\'s!',
    description: 'Design and code a nostalgic arcade directly in a bower. Use pixel art, simple mechanics, and JavaScript to bring your 8-bit master piece to life!',
    startDate: 'Oct 15, 2025',
    endDate: 'Oct 28, 2025',
    participants: '100',
    remainingDays: '13 days left for Submission',
    status: 'Not Joined',
    prizePool: '$10,000',
    hostedBy: '@user1324983',
    joined: '312',
    image: null
  };

  const data = challenge || defaultChallenge;

  const toggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);

  return (
    <section className="mb-16">
      <div className="w-full px-6 py-8">
        <div className="w-full max-w-7xl mx-auto">
          
          {/* Section Title */}
          <h2 className="text-4xl font-semibold text-slate-100 mb-8 px-2">
            Active Challenge
          </h2>

          {/* Main Challenge Card */}
          <div className="w-full group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-3xl min-h-[280px]">
            
            {/* Background gradients for depth */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            </div>

            <div className="relative flex flex-col lg:flex-row gap-0 p-6 lg:p-8">
              
              {/* Left Content Section */}
              <div className="flex-1 flex flex-col gap-6">
                
                {/* Date Range Pills */}
                <div className="flex flex-wrap gap-3">
                  <div className="px-5 py-2 rounded-full border border-slate-600/60 bg-slate-800/70 backdrop-blur text-slate-300 text-sm font-medium">
                    Start: {data.startDate}
                  </div>
                  <div className="px-5 py-2 rounded-full border border-slate-600/60 bg-slate-800/70 backdrop-blur text-slate-300 text-sm font-medium">
                    End: {data.endDate}
                  </div>
                </div>

                {/* Challenge Title */}
                <h3 className="text-5xl font-bold text-slate-100 leading-tight">
                  {data.title}
                </h3>

                {/* Subtitle */}
                <p className="text-2xl font-medium text-slate-300">
                  {data.subtitle}
                </p>

                {/* Description */}
                <p className="text-base text-slate-400 leading-relaxed">
                  {data.description}
                </p>

                {/* Countdown Bar */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-600/60 bg-slate-800/50 backdrop-blur">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium text-slate-300">{data.remainingDays}</span>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="px-4 py-2 rounded-lg border border-slate-600/60 bg-slate-800/70 backdrop-blur">
                    <span className="text-sm font-medium text-slate-300">
                      <span className="text-slate-100 font-semibold">{data.joined}</span> / {data.participants} Participants
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="px-4 py-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 backdrop-blur">
                    <span className="text-sm font-semibold text-yellow-400">{data.status}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="px-6 py-3 rounded-xl bg-slate-100 text-slate-900 font-semibold hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Join Challenge
                  </button>
                  <button 
                    onClick={toggleLike}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border backdrop-blur font-medium transition-all duration-300 ${
                      liked 
                        ? 'border-pink-500/40 bg-pink-500/10 text-pink-400 hover:bg-pink-500/20' 
                        : 'border-slate-600/60 bg-slate-800/70 text-slate-300 hover:border-slate-500/50 hover:text-slate-100'
                    }`}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={liked ? 'currentColor' : 'none'} 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="w-5 h-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.995 7.162c-.885-1.06-2.44-2.012-4.07-1.187-2.232 1.139-2.614 4.27-.808 6.516 1.31 1.64 3.956 3.82 4.878 4.57a.5.5 0 0 0 .634 0c.922-.75 3.57-2.93 4.878-4.57 1.806-2.246 1.424-5.377-.808-6.516-1.63-.825-3.185.127-4.07 1.187Z" />
                    </svg>
                    {liked ? 'Liked' : 'Like'}
                  </button>
                  <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-600/60 bg-slate-800/70 backdrop-blur text-slate-300 font-medium hover:border-slate-500/50 hover:text-slate-100 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
              </div>

              {/* Right Section - Image & Prize */}
              <div className="lg:w-[480px] flex flex-col gap-6">
                
                {/* Challenge Image */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/70 group-hover:border-slate-600/50 transition-colors">
                  {data.image ? (
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                      <svg 
                        className="w-20 h-20 text-slate-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={1.5} 
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
                </div>

                {/* Prize Pool Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl">
                  <div className="flex flex-col gap-4">
                    
                    {/* Prize Amount */}
                    <div className="flex items-baseline gap-2">
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                      <span className="text-5xl font-bold text-slate-100">{data.prizePool}</span>
                      <span className="text-lg text-slate-400 ml-1">Prize Pool</span>
                    </div>

                    {/* Hosted By */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      <span className="text-sm text-slate-400">Hosted by</span>
                      <span className="text-sm font-semibold text-slate-200 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl">
                        {data.hostedBy}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
