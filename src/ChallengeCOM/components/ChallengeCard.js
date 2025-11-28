import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ChallengeCard({ challenge, index }) {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    const colors = {
      active: 'from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-400',
      upcoming: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
      voting: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
      ended: 'from-slate-500/20 to-gray-500/20 border-slate-500/30 text-slate-400'
    };
    return colors[status] || colors.active;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'ui-components': '🎨',
      'plugins': '🔌',
      'templates': '📐',
      'full-projects': '🚀'
    };
    return icons[category] || '🎯';
  };

  const daysRemaining = Math.ceil((new Date(challenge.end_date) - new Date()) / (1000 * 60 * 60 * 24));
  const progress = (challenge.total_participants / 100) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={() => navigate(`/challenge/${challenge.id}`)}
      className="group relative cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

      <div className="relative h-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

        {challenge.cover_image_url && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={challenge.cover_image_url}
              alt={challenge.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          </div>
        )}

        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{getCategoryIcon(challenge.category)}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border bg-gradient-to-r ${getStatusColor(challenge.status)}`}>
                  {challenge.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                {challenge.title}
              </h3>

              {challenge.subtitle && (
                <p className="text-slate-400 text-sm mb-3">{challenge.subtitle}</p>
              )}
            </div>
          </div>

          <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
            {challenge.description}
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white">
                  ${challenge.prize_pool?.toLocaleString() || '0'}
                </div>
                <div className="text-xs text-slate-400">Prize Pool</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-white">{challenge.total_participants || 0}</div>
                <div className="text-xs text-slate-400">Participants</div>
              </div>
            </div>
          </div>

          {challenge.status === 'active' && daysRemaining > 0 && (
            <div className="pt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-slate-400">
                  {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
                </span>
                <span className="text-xs font-medium text-cyan-400">{Math.min(100, progress).toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, progress)}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>
            </div>
          )}

          {challenge.host_profile && (
            <div className="flex items-center gap-2 pt-3 border-t border-white/10">
              <span className="text-xs text-slate-400">Hosted by</span>
              <div className="flex items-center gap-2">
                {challenge.host_profile.logo_url && (
                  <img
                    src={challenge.host_profile.logo_url}
                    alt={challenge.host_profile.organization_name}
                    className="w-5 h-5 rounded-full"
                  />
                )}
                <span className="text-xs font-semibold text-slate-200">
                  {challenge.host_profile.organization_name || 'Anonymous'}
                </span>
                {challenge.host_profile.verified && (
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
