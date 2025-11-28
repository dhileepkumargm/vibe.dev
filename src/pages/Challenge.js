import React, { useState } from 'react';
import {
  ChallengeExplorer,
  FilterBar,
  ChallengeGrid,
  CreateChallengeWizard,
  useChallenges
} from '../ChallengeCOM';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

export default function ChallengePage() {
  const { user } = useAuth();
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateWizard, setShowCreateWizard] = useState(false);

  const { challenges, loading, refetch } = useChallenges({
    ...filters,
    search: searchQuery
  });

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const totalChallenges = challenges.length;
  const activeChallenges = challenges.filter(c => c.status === 'active').length;
  const totalPrizes = challenges.reduce((sum, c) => sum + (parseFloat(c.prize_pool) || 0), 0);

  return (
    <main className="relative min-h-screen">
      <div className="px-4 md:px-8 lg:px-14 py-12 max-w-7xl mx-auto space-y-12">
        <ChallengeExplorer
          onSearch={handleSearch}
          totalChallenges={totalChallenges}
          activeChallenges={activeChallenges}
          totalPrizes={totalPrizes.toLocaleString()}
        />

        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            Browse Challenges
          </h2>

          {user && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCreateWizard(true)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Host Challenge
            </motion.button>
          )}
        </div>

        <FilterBar filters={filters} onFilterChange={handleFilterChange} />

        <ChallengeGrid challenges={challenges} loading={loading} />

        {challenges.length > 0 && (
          <div className="text-center py-8">
            <p className="text-slate-400">
              Showing {challenges.length} challenge{challenges.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>

      {showCreateWizard && (
        <CreateChallengeWizard
          onClose={() => {
            setShowCreateWizard(false);
            refetch();
          }}
        />
      )}
    </main>
  );
}
