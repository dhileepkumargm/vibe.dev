import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import { challengeService } from '../utils/challengeService';

export default function ChallengeDetail({ challenge, onJoin, onSubmit }) {
  const { user } = useAuth();
  const [participation, setParticipation] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && challenge) {
      loadParticipation();
    }
  }, [user, challenge]);

  const loadParticipation = async () => {
    try {
      const data = await challengeService.getUserParticipation(challenge.id);
      setParticipation(data);
    } catch (error) {
      console.error('Error loading participation:', error);
    }
  };

  const handleJoin = async () => {
    if (!user) {
      alert('Please sign in to join challenges');
      return;
    }

    try {
      setLoading(true);
      await challengeService.joinChallenge(challenge.id);
      await loadParticipation();
      if (onJoin) onJoin();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const daysRemaining = Math.ceil((new Date(challenge.end_date) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-8">
      <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl">
        {challenge.cover_image_url && (
          <div className="relative h-96">
            <img
              src={challenge.cover_image_url}
              alt={challenge.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
          </div>
        )}

        <div className="relative p-8 md:p-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400">
              {challenge.status.toUpperCase()}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 border border-white/20 text-white">
              {challenge.category?.replace('-', ' ').toUpperCase()}
            </span>
            {challenge.tags?.map((tag, i) => (
              <span key={i} className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-slate-300">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {challenge.title}
          </h1>

          {challenge.subtitle && (
            <p className="text-2xl text-slate-300 mb-6">{challenge.subtitle}</p>
          )}

          <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-4xl">
            {challenge.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <StatBox
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>}
              value={`$${challenge.prize_pool?.toLocaleString() || '0'}`}
              label="Prize Pool"
              color="text-yellow-400"
            />
            <StatBox
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>}
              value={challenge.total_participants || 0}
              label="Participants"
              color="text-blue-400"
            />
            <StatBox
              icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>}
              value={challenge.total_submissions || 0}
              label="Submissions"
              color="text-green-400"
            />
            <StatBox
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              value={daysRemaining > 0 ? `${daysRemaining}d` : 'Ended'}
              label="Time Left"
              color="text-purple-400"
            />
          </div>

          {!participation && user && challenge.status === 'active' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleJoin}
              disabled={loading}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Joining...' : 'Join Challenge'}
            </motion.button>
          )}

          {participation && (
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-500/20 border border-green-500/30">
              <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span className="text-green-400 font-semibold">You're participating!</span>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
        <div className="flex border-b border-white/10">
          {['overview', 'requirements', 'prizes', 'timeline'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 px-6 py-4 font-semibold capitalize transition-all duration-300 ${
                activeTab === tab
                  ? 'text-cyan-400 border-b-2 border-cyan-400 bg-white/5'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-8">
          {activeTab === 'overview' && (
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4">About This Challenge</h3>
              <p className="text-slate-300 leading-relaxed">{challenge.description}</p>
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4">Requirements</h3>
              <div className="text-slate-300 leading-relaxed whitespace-pre-line">
                {challenge.requirements || 'No specific requirements listed.'}
              </div>
            </div>
          )}

          {activeTab === 'prizes' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Prize Distribution</h3>
              {challenge.prize_distribution && Object.keys(challenge.prize_distribution).length > 0 ? (
                <div className="grid gap-4">
                  {Object.entries(challenge.prize_distribution).map(([place, amount]) => (
                    <div key={place} className="flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-lg font-semibold text-white capitalize">{place}</span>
                      <span className="text-2xl font-bold text-yellow-400">${amount.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400">Prize distribution will be announced soon.</p>
              )}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Challenge Timeline</h3>
              <div className="space-y-4">
                <TimelineItem
                  title="Challenge Starts"
                  date={new Date(challenge.start_date).toLocaleDateString()}
                  completed={new Date() > new Date(challenge.start_date)}
                />
                <TimelineItem
                  title="Submission Deadline"
                  date={new Date(challenge.submission_deadline).toLocaleDateString()}
                  completed={new Date() > new Date(challenge.submission_deadline)}
                />
                {challenge.voting_end_date && (
                  <TimelineItem
                    title="Voting Ends"
                    date={new Date(challenge.voting_end_date).toLocaleDateString()}
                    completed={new Date() > new Date(challenge.voting_end_date)}
                  />
                )}
                <TimelineItem
                  title="Winners Announced"
                  date={new Date(challenge.end_date).toLocaleDateString()}
                  completed={new Date() > new Date(challenge.end_date)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatBox({ icon, value, label, color }) {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <div className={`${color} mb-3`}>{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function TimelineItem({ title, date, completed }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
        completed ? 'bg-green-500/20 border-green-500' : 'bg-white/5 border-white/20'
      }`}>
        {completed ? (
          <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        ) : (
          <div className="w-3 h-3 rounded-full bg-white/20" />
        )}
      </div>
      <div className="flex-1">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-sm text-slate-400">{date}</div>
      </div>
    </div>
  );
}
