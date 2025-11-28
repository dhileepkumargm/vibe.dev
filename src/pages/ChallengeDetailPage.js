import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChallengeDetail, SubmissionGallery, useChallenge } from '../ChallengeCOM';
import { challengeService } from '../ChallengeCOM/utils/challengeService';
import { motion } from 'framer-motion';

export default function ChallengeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { challenge, loading, refetch } = useChallenge(id);
  const [submissions, setSubmissions] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);

  const loadSubmissions = async () => {
    try {
      setLoadingSubmissions(true);
      const data = await challengeService.getSubmissions(id);
      setSubmissions(data);
      setShowSubmissions(true);
    } catch (error) {
      console.error('Error loading submissions:', error);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleVote = async (submissionId) => {
    try {
      await challengeService.voteForSubmission(submissionId, {
        design_rating: 5,
        functionality_rating: 5,
        innovation_rating: 5,
        code_quality_rating: 5,
        vote_type: 'community'
      });
      alert('Vote submitted successfully!');
      loadSubmissions();
    } catch (error) {
      alert('Error voting: ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mx-auto mb-4" />
          <p className="text-slate-400">Loading challenge...</p>
        </div>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Challenge Not Found</h2>
          <p className="text-slate-400 mb-6">The challenge you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/challenges')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"
          >
            Back to Challenges
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-14 py-12 max-w-7xl mx-auto space-y-12">
      <button
        onClick={() => navigate('/challenges')}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Challenges
      </button>

      <ChallengeDetail challenge={challenge} onJoin={refetch} />

      {(challenge.status === 'voting' || challenge.status === 'ended' || challenge.total_submissions > 0) && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">
              Submissions ({challenge.total_submissions || 0})
            </h2>

            {!showSubmissions && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={loadSubmissions}
                disabled={loadingSubmissions}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                {loadingSubmissions ? 'Loading...' : 'View Submissions'}
              </motion.button>
            )}
          </div>

          {showSubmissions && (
            <SubmissionGallery
              submissions={submissions}
              onVote={handleVote}
              onViewDetails={(id) => console.log('View details:', id)}
            />
          )}
        </div>
      )}
    </main>
  );
}
