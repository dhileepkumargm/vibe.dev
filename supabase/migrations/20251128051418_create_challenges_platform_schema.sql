/*
  # Create Challenges Platform Schema

  ## Overview
  Complete database schema for a challenge hosting platform where users, partnerships, and SaaS companies can host challenges for UI components, plugins, templates, etc.

  ## New Tables
  
  ### 1. `host_profiles`
  - `id` (uuid, primary key)
  - `user_id` (uuid, references auth.users)
  - `organization_name` (text)
  - `logo_url` (text)
  - `bio` (text)
  - `website` (text)
  - `verified` (boolean, default false)
  - `host_type` (text: individual, company, partnership, saas)
  - `total_challenges_hosted` (integer, default 0)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `challenge_sponsors`
  - `id` (uuid, primary key)
  - `name` (text)
  - `logo_url` (text)
  - `website` (text)
  - `tier` (text: bronze, silver, gold, platinum)
  - `description` (text)
  - `is_active` (boolean, default true)
  - `created_at` (timestamptz)

  ### 3. `challenges`
  - `id` (uuid, primary key)
  - `title` (text)
  - `subtitle` (text)
  - `description` (text)
  - `start_date` (timestamptz)
  - `end_date` (timestamptz)
  - `submission_deadline` (timestamptz)
  - `voting_end_date` (timestamptz)
  - `prize_pool` (numeric)
  - `prize_distribution` (jsonb)
  - `status` (text: draft, upcoming, active, voting, ended)
  - `cover_image_url` (text)
  - `host_user_id` (uuid, references auth.users)
  - `host_profile_id` (uuid, references host_profiles)
  - `category` (text: ui-components, plugins, templates, full-projects)
  - `tags` (text array)
  - `requirements` (text)
  - `rules` (text)
  - `judging_criteria` (jsonb)
  - `total_participants` (integer, default 0)
  - `total_submissions` (integer, default 0)
  - `total_votes` (integer, default 0)
  - `views_count` (integer, default 0)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `partnerships`
  - `id` (uuid, primary key)
  - `sponsor_id` (uuid, references challenge_sponsors)
  - `challenge_id` (uuid, references challenges)
  - `contribution_amount` (numeric)
  - `benefits` (jsonb)
  - `created_at` (timestamptz)

  ### 5. `challenge_participants`
  - `id` (uuid, primary key)
  - `challenge_id` (uuid, references challenges)
  - `user_id` (uuid, references auth.users)
  - `joined_at` (timestamptz)
  - `status` (text: joined, submitted, withdrawn)

  ### 6. `challenge_submissions`
  - `id` (uuid, primary key)
  - `challenge_id` (uuid, references challenges)
  - `user_id` (uuid, references auth.users)
  - `participant_id` (uuid, references challenge_participants)
  - `title` (text)
  - `description` (text)
  - `code_url` (text)
  - `demo_url` (text)
  - `repository_url` (text)
  - `images` (text array)
  - `technologies` (text array)
  - `submitted_at` (timestamptz)
  - `updated_at` (timestamptz)
  - `total_votes` (integer, default 0)
  - `ranking` (integer)

  ### 7. `challenge_votes`
  - `id` (uuid, primary key)
  - `challenge_id` (uuid, references challenges)
  - `submission_id` (uuid, references challenge_submissions)
  - `voter_user_id` (uuid, references auth.users)
  - `vote_type` (text: community, judge)
  - `design_rating` (integer)
  - `functionality_rating` (integer)
  - `innovation_rating` (integer)
  - `code_quality_rating` (integer)
  - `created_at` (timestamptz)

  ### 8. `user_achievements`
  - `id` (uuid, primary key)
  - `user_id` (uuid, references auth.users)
  - `achievement_type` (text)
  - `challenge_id` (uuid, references challenges)
  - `earned_at` (timestamptz)

  ## Security
  - Enable RLS on all tables
  - Add policies for authenticated users to read public data
  - Add policies for users to manage their own data
  - Add policies for challenge hosts to manage their challenges
*/

-- Create host_profiles table
CREATE TABLE IF NOT EXISTS host_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  organization_name text,
  logo_url text,
  bio text,
  website text,
  verified boolean DEFAULT false,
  host_type text DEFAULT 'individual' CHECK (host_type IN ('individual', 'company', 'partnership', 'saas')),
  total_challenges_hosted integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create challenge_sponsors table
CREATE TABLE IF NOT EXISTS challenge_sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  website text,
  tier text DEFAULT 'bronze' CHECK (tier IN ('bronze', 'silver', 'gold', 'platinum')),
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  subtitle text,
  description text NOT NULL,
  start_date timestamptz NOT NULL,
  end_date timestamptz NOT NULL,
  submission_deadline timestamptz NOT NULL,
  voting_end_date timestamptz,
  prize_pool numeric DEFAULT 0,
  prize_distribution jsonb DEFAULT '{}',
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'upcoming', 'active', 'voting', 'ended')),
  cover_image_url text,
  host_user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  host_profile_id uuid REFERENCES host_profiles(id) ON DELETE SET NULL,
  category text DEFAULT 'ui-components' CHECK (category IN ('ui-components', 'plugins', 'templates', 'full-projects')),
  tags text[] DEFAULT '{}',
  requirements text,
  rules text,
  judging_criteria jsonb DEFAULT '{}',
  total_participants integer DEFAULT 0,
  total_submissions integer DEFAULT 0,
  total_votes integer DEFAULT 0,
  views_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create partnerships table
CREATE TABLE IF NOT EXISTS partnerships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sponsor_id uuid REFERENCES challenge_sponsors(id) ON DELETE CASCADE NOT NULL,
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE NOT NULL,
  contribution_amount numeric DEFAULT 0,
  benefits jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Create challenge_participants table
CREATE TABLE IF NOT EXISTS challenge_participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  joined_at timestamptz DEFAULT now(),
  status text DEFAULT 'joined' CHECK (status IN ('joined', 'submitted', 'withdrawn')),
  UNIQUE(challenge_id, user_id)
);

-- Create challenge_submissions table
CREATE TABLE IF NOT EXISTS challenge_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  participant_id uuid REFERENCES challenge_participants(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  code_url text,
  demo_url text,
  repository_url text,
  images text[] DEFAULT '{}',
  technologies text[] DEFAULT '{}',
  submitted_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  total_votes integer DEFAULT 0,
  ranking integer,
  UNIQUE(challenge_id, user_id)
);

-- Create challenge_votes table
CREATE TABLE IF NOT EXISTS challenge_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE NOT NULL,
  submission_id uuid REFERENCES challenge_submissions(id) ON DELETE CASCADE NOT NULL,
  voter_user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  vote_type text DEFAULT 'community' CHECK (vote_type IN ('community', 'judge')),
  design_rating integer CHECK (design_rating >= 1 AND design_rating <= 5),
  functionality_rating integer CHECK (functionality_rating >= 1 AND functionality_rating <= 5),
  innovation_rating integer CHECK (innovation_rating >= 1 AND innovation_rating <= 5),
  code_quality_rating integer CHECK (code_quality_rating >= 1 AND code_quality_rating <= 5),
  created_at timestamptz DEFAULT now(),
  UNIQUE(submission_id, voter_user_id)
);

-- Create user_achievements table
CREATE TABLE IF NOT EXISTS user_achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  achievement_type text NOT NULL,
  challenge_id uuid REFERENCES challenges(id) ON DELETE CASCADE,
  earned_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE host_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE partnerships ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for host_profiles
CREATE POLICY "Anyone can view host profiles"
  ON host_profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create their own host profile"
  ON host_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own host profile"
  ON host_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for challenge_sponsors
CREATE POLICY "Anyone can view active sponsors"
  ON challenge_sponsors FOR SELECT
  TO authenticated
  USING (is_active = true);

-- RLS Policies for challenges
CREATE POLICY "Anyone can view active challenges"
  ON challenges FOR SELECT
  TO authenticated
  USING (status IN ('upcoming', 'active', 'voting', 'ended'));

CREATE POLICY "Users can view their own draft challenges"
  ON challenges FOR SELECT
  TO authenticated
  USING (host_user_id = auth.uid());

CREATE POLICY "Users can create challenges"
  ON challenges FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = host_user_id);

CREATE POLICY "Challenge hosts can update their challenges"
  ON challenges FOR UPDATE
  TO authenticated
  USING (auth.uid() = host_user_id)
  WITH CHECK (auth.uid() = host_user_id);

CREATE POLICY "Challenge hosts can delete their draft challenges"
  ON challenges FOR DELETE
  TO authenticated
  USING (auth.uid() = host_user_id AND status = 'draft');

-- RLS Policies for partnerships
CREATE POLICY "Anyone can view partnerships"
  ON partnerships FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for challenge_participants
CREATE POLICY "Anyone can view participants"
  ON challenge_participants FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can join challenges"
  ON challenge_participants FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their participation status"
  ON challenge_participants FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for challenge_submissions
CREATE POLICY "Anyone can view submissions"
  ON challenge_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Participants can create submissions"
  ON challenge_submissions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own submissions"
  ON challenge_submissions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own submissions"
  ON challenge_submissions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- RLS Policies for challenge_votes
CREATE POLICY "Anyone can view votes"
  ON challenge_votes FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can cast votes"
  ON challenge_votes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = voter_user_id);

CREATE POLICY "Users can update their own votes"
  ON challenge_votes FOR UPDATE
  TO authenticated
  USING (auth.uid() = voter_user_id)
  WITH CHECK (auth.uid() = voter_user_id);

-- RLS Policies for user_achievements
CREATE POLICY "Users can view their own achievements"
  ON user_achievements FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view all achievements"
  ON user_achievements FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_challenges_status ON challenges(status);
CREATE INDEX IF NOT EXISTS idx_challenges_category ON challenges(category);
CREATE INDEX IF NOT EXISTS idx_challenges_host_user_id ON challenges(host_user_id);
CREATE INDEX IF NOT EXISTS idx_challenges_start_date ON challenges(start_date);
CREATE INDEX IF NOT EXISTS idx_challenge_participants_challenge_id ON challenge_participants(challenge_id);
CREATE INDEX IF NOT EXISTS idx_challenge_participants_user_id ON challenge_participants(user_id);
CREATE INDEX IF NOT EXISTS idx_challenge_submissions_challenge_id ON challenge_submissions(challenge_id);
CREATE INDEX IF NOT EXISTS idx_challenge_submissions_user_id ON challenge_submissions(user_id);
CREATE INDEX IF NOT EXISTS idx_challenge_votes_submission_id ON challenge_votes(submission_id);
CREATE INDEX IF NOT EXISTS idx_challenge_votes_voter_user_id ON challenge_votes(voter_user_id);

-- Create function to update challenge statistics
CREATE OR REPLACE FUNCTION update_challenge_stats()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_TABLE_NAME = 'challenge_participants' THEN
    UPDATE challenges
    SET total_participants = (
      SELECT COUNT(*) FROM challenge_participants 
      WHERE challenge_id = NEW.challenge_id AND status != 'withdrawn'
    )
    WHERE id = NEW.challenge_id;
  ELSIF TG_TABLE_NAME = 'challenge_submissions' THEN
    UPDATE challenges
    SET total_submissions = (
      SELECT COUNT(*) FROM challenge_submissions WHERE challenge_id = NEW.challenge_id
    )
    WHERE id = NEW.challenge_id;
  ELSIF TG_TABLE_NAME = 'challenge_votes' THEN
    UPDATE challenge_submissions
    SET total_votes = (
      SELECT COUNT(*) FROM challenge_votes WHERE submission_id = NEW.submission_id
    )
    WHERE id = NEW.submission_id;
    
    UPDATE challenges
    SET total_votes = (
      SELECT COUNT(*) FROM challenge_votes WHERE challenge_id = NEW.challenge_id
    )
    WHERE id = NEW.challenge_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic stats updates
CREATE TRIGGER trigger_update_participants_count
  AFTER INSERT OR UPDATE ON challenge_participants
  FOR EACH ROW
  EXECUTE FUNCTION update_challenge_stats();

CREATE TRIGGER trigger_update_submissions_count
  AFTER INSERT OR DELETE ON challenge_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_challenge_stats();

CREATE TRIGGER trigger_update_votes_count
  AFTER INSERT OR DELETE ON challenge_votes
  FOR EACH ROW
  EXECUTE FUNCTION update_challenge_stats();
