import React from 'react';
import { motion } from 'framer-motion';

export default function SubmissionGallery({ submissions, onVote, onViewDetails }) {
  if (!submissions || submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex p-6 rounded-full bg-slate-800/50 border border-white/10 mb-4">
          <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No Submissions Yet</h3>
        <p className="text-slate-400">Be the first to submit your entry!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {submissions.map((submission, index) => (
        <SubmissionCard
          key={submission.id}
          submission={submission}
          index={index}
          onVote={onVote}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

function SubmissionCard({ submission, index, onVote, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300" />

      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        {submission.images && submission.images[0] && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={submission.images[0]}
              alt={submission.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 space-y-4">
          {submission.ranking && submission.ranking <= 3 && (
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold">
                #{submission.ranking}
              </div>
            </div>
          )}

          <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-cyan-400 transition-colors">
            {submission.title}
          </h3>

          <p className="text-sm text-slate-400 line-clamp-3">
            {submission.description}
          </p>

          {submission.technologies && submission.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {submission.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="text-white font-semibold">{submission.total_votes || 0}</span>
            </div>

            <div className="flex gap-2">
              {submission.demo_url && (
                <a
                  href={submission.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onVote(submission.id);
                }}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
