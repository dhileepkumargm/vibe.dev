import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { challengeService } from '../utils/challengeService';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const steps = ['Basic Info', 'Details', 'Prizes', 'Timeline', 'Review'];

export default function CreateChallengeWizard({ onClose }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    category: 'ui-components',
    cover_image_url: '',
    description: '',
    requirements: '',
    rules: '',
    tags: [],
    prize_pool: '',
    prize_distribution: { first: '', second: '', third: '' },
    start_date: '',
    end_date: '',
    submission_deadline: '',
    voting_end_date: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      alert('Please sign in to create a challenge');
      return;
    }

    try {
      setLoading(true);
      const challengeData = {
        ...formData,
        prize_pool: parseFloat(formData.prize_pool) || 0,
        prize_distribution: JSON.stringify({
          '1st Place': parseFloat(formData.prize_distribution.first) || 0,
          '2nd Place': parseFloat(formData.prize_distribution.second) || 0,
          '3rd Place': parseFloat(formData.prize_distribution.third) || 0
        }),
        status: 'draft'
      };

      const challenge = await challengeService.createChallenge(challengeData);
      alert('Challenge created successfully!');
      navigate(`/challenge/${challenge.id}`);
      if (onClose) onClose();
    } catch (error) {
      alert('Error creating challenge: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl"
      >
        <div className="sticky top-0 z-10 px-8 py-6 border-b border-white/10 bg-slate-900/90 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white">Create New Challenge</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    index <= currentStep
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-slate-400'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`mt-2 text-sm font-medium ${
                    index <= currentStep ? 'text-white' : 'text-slate-400'
                  }`}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                    index < currentStep
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                      : 'bg-white/10'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <StepBasicInfo formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 1 && (
              <StepDetails formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 2 && (
              <StepPrizes formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 3 && (
              <StepTimeline formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 4 && (
              <StepReview formData={formData} />
            )}
          </AnimatePresence>
        </div>

        <div className="sticky bottom-0 px-8 py-6 border-t border-white/10 bg-slate-900/90 backdrop-blur-xl flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create Challenge'}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

function StepBasicInfo({ formData, updateFormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-white mb-2">Challenge Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => updateFormData('title', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          placeholder="Enter an exciting title..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Subtitle</label>
        <input
          type="text"
          value={formData.subtitle}
          onChange={(e) => updateFormData('subtitle', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          placeholder="Brief description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Category</label>
        <select
          value={formData.category}
          onChange={(e) => updateFormData('category', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
        >
          <option value="ui-components">UI Components</option>
          <option value="plugins">Plugins</option>
          <option value="templates">Templates</option>
          <option value="full-projects">Full Projects</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Cover Image URL</label>
        <input
          type="url"
          value={formData.cover_image_url}
          onChange={(e) => updateFormData('cover_image_url', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          placeholder="https://..."
        />
      </div>
    </motion.div>
  );
}

function StepDetails({ formData, updateFormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-white mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => updateFormData('description', e.target.value)}
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none resize-none"
          placeholder="Detailed challenge description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Requirements</label>
        <textarea
          value={formData.requirements}
          onChange={(e) => updateFormData('requirements', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none resize-none"
          placeholder="What are the requirements?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Rules</label>
        <textarea
          value={formData.rules}
          onChange={(e) => updateFormData('rules', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none resize-none"
          placeholder="Challenge rules and guidelines..."
        />
      </div>
    </motion.div>
  );
}

function StepPrizes({ formData, updateFormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-white mb-2">Total Prize Pool</label>
        <input
          type="number"
          value={formData.prize_pool}
          onChange={(e) => updateFormData('prize_pool', e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          placeholder="0"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">1st Place</label>
          <input
            type="number"
            value={formData.prize_distribution.first}
            onChange={(e) => updateFormData('prize_distribution', { ...formData.prize_distribution, first: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">2nd Place</label>
          <input
            type="number"
            value={formData.prize_distribution.second}
            onChange={(e) => updateFormData('prize_distribution', { ...formData.prize_distribution, second: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">3rd Place</label>
          <input
            type="number"
            value={formData.prize_distribution.third}
            onChange={(e) => updateFormData('prize_distribution', { ...formData.prize_distribution, third: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
            placeholder="0"
          />
        </div>
      </div>
    </motion.div>
  );
}

function StepTimeline({ formData, updateFormData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Start Date</label>
          <input
            type="datetime-local"
            value={formData.start_date}
            onChange={(e) => updateFormData('start_date', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Submission Deadline</label>
          <input
            type="datetime-local"
            value={formData.submission_deadline}
            onChange={(e) => updateFormData('submission_deadline', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Voting End Date</label>
          <input
            type="datetime-local"
            value={formData.voting_end_date}
            onChange={(e) => updateFormData('voting_end_date', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">End Date</label>
          <input
            type="datetime-local"
            value={formData.end_date}
            onChange={(e) => updateFormData('end_date', e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>
      </div>
    </motion.div>
  );
}

function StepReview({ formData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Review Your Challenge</h3>

      <div className="space-y-4">
        <ReviewItem label="Title" value={formData.title} />
        <ReviewItem label="Subtitle" value={formData.subtitle} />
        <ReviewItem label="Category" value={formData.category} />
        <ReviewItem label="Prize Pool" value={`$${formData.prize_pool}`} />
        <ReviewItem label="Description" value={formData.description} />
      </div>
    </motion.div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="text-sm font-medium text-slate-400 mb-1">{label}</div>
      <div className="text-white">{value || 'Not provided'}</div>
    </div>
  );
}
