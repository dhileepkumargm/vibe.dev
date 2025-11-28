import { useState, useEffect } from 'react';
import { challengeService } from '../utils/challengeService';

export function useChallenges(filters = {}) {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadChallenges();
  }, [JSON.stringify(filters)]);

  const loadChallenges = async () => {
    try {
      setLoading(true);
      const data = await challengeService.getAllChallenges(filters);
      setChallenges(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { challenges, loading, error, refetch: loadChallenges };
}

export function useChallenge(id) {
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadChallenge();
    }
  }, [id]);

  const loadChallenge = async () => {
    try {
      setLoading(true);
      const data = await challengeService.getChallengeById(id);
      setChallenge(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { challenge, loading, error, refetch: loadChallenge };
}
