import { supabase } from '../../firebase';

export const challengeService = {
  async getAllChallenges(filters = {}) {
    let query = supabase
      .from('challenges')
      .select(`
        *,
        host_profile:host_profiles(*),
        partnerships(
          *,
          sponsor:challenge_sponsors(*)
        )
      `)
      .in('status', ['upcoming', 'active', 'voting', 'ended'])
      .order('created_at', { ascending: false });

    if (filters.status) {
      query = query.eq('status', filters.status);
    }

    if (filters.category) {
      query = query.eq('category', filters.category);
    }

    if (filters.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
  },

  async getChallengeById(id) {
    const { data, error } = await supabase
      .from('challenges')
      .select(`
        *,
        host_profile:host_profiles(*),
        partnerships(
          *,
          sponsor:challenge_sponsors(*)
        ),
        participants:challenge_participants(count),
        submissions:challenge_submissions(
          *,
          user:auth.users(*)
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;

    await supabase
      .from('challenges')
      .update({ views_count: (data.views_count || 0) + 1 })
      .eq('id', id);

    return data;
  },

  async createChallenge(challengeData) {
    const { data, error } = await supabase
      .from('challenges')
      .insert([{
        ...challengeData,
        host_user_id: (await supabase.auth.getUser()).data.user.id
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async updateChallenge(id, updates) {
    const { data, error } = await supabase
      .from('challenges')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async joinChallenge(challengeId) {
    const user = (await supabase.auth.getUser()).data.user;

    const { data, error } = await supabase
      .from('challenge_participants')
      .insert([{
        challenge_id: challengeId,
        user_id: user.id
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async submitEntry(submissionData) {
    const user = (await supabase.auth.getUser()).data.user;

    const { data: participant } = await supabase
      .from('challenge_participants')
      .select('id')
      .eq('challenge_id', submissionData.challenge_id)
      .eq('user_id', user.id)
      .single();

    const { data, error } = await supabase
      .from('challenge_submissions')
      .insert([{
        ...submissionData,
        user_id: user.id,
        participant_id: participant?.id
      }])
      .select()
      .single();

    if (error) throw error;

    await supabase
      .from('challenge_participants')
      .update({ status: 'submitted' })
      .eq('challenge_id', submissionData.challenge_id)
      .eq('user_id', user.id);

    return data;
  },

  async voteForSubmission(submissionId, ratings) {
    const user = (await supabase.auth.getUser()).data.user;

    const { data: submission } = await supabase
      .from('challenge_submissions')
      .select('challenge_id')
      .eq('id', submissionId)
      .single();

    const { data, error } = await supabase
      .from('challenge_votes')
      .insert([{
        challenge_id: submission.challenge_id,
        submission_id: submissionId,
        voter_user_id: user.id,
        ...ratings
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async getSubmissions(challengeId) {
    const { data, error } = await supabase
      .from('challenge_submissions')
      .select(`
        *,
        votes:challenge_votes(count)
      `)
      .eq('challenge_id', challengeId)
      .order('total_votes', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getUserParticipation(challengeId) {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return null;

    const { data } = await supabase
      .from('challenge_participants')
      .select('*')
      .eq('challenge_id', challengeId)
      .eq('user_id', user.id)
      .maybeSingle();

    return data;
  }
};
