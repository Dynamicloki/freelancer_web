/*
  # Initial Schema Setup

  1. New Tables
    - profiles
      - id (uuid, primary key)
      - user_id (uuid, references auth.users)
      - user_type (enum: freelancer, client)
      - full_name (text)
      - avatar_url (text)
      - created_at (timestamp)
    
    - services
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - freelancer_id (uuid, references profiles)
      - category (text)
      - price (integer)
      - created_at (timestamp)
    
    - projects
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - client_id (uuid, references profiles)
      - budget (integer)
      - status (enum)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create custom types
CREATE TYPE user_type AS ENUM ('freelancer', 'client');
CREATE TYPE project_status AS ENUM ('draft', 'open', 'in_progress', 'completed', 'cancelled');

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users ON DELETE CASCADE,
  user_type user_type NOT NULL,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create services table
CREATE TABLE services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  freelancer_id uuid REFERENCES profiles ON DELETE CASCADE,
  category text NOT NULL,
  price integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  client_id uuid REFERENCES profiles ON DELETE CASCADE,
  budget integer NOT NULL,
  status project_status DEFAULT 'draft',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Services policies
CREATE POLICY "Services are viewable by everyone"
  ON services FOR SELECT
  USING (true);

CREATE POLICY "Freelancers can create services"
  ON services FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = freelancer_id
      AND profiles.user_id = auth.uid()
      AND profiles.user_type = 'freelancer'
    )
  );

CREATE POLICY "Freelancers can update own services"
  ON services FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = freelancer_id
      AND profiles.user_id = auth.uid()
      AND profiles.user_type = 'freelancer'
    )
  );

-- Projects policies
CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  USING (true);

CREATE POLICY "Clients can create projects"
  ON projects FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = client_id
      AND profiles.user_id = auth.uid()
      AND profiles.user_type = 'client'
    )
  );

CREATE POLICY "Clients can update own projects"
  ON projects FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = client_id
      AND profiles.user_id = auth.uid()
      AND profiles.user_type = 'client'
    )
  );