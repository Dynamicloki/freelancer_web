export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          user_type: 'freelancer' | 'client'
          full_name: string | null
          avatar_url: string | null
          created_at: string
        }
      }
      services: {
        Row: {
          id: string
          title: string
          description: string | null
          freelancer_id: string
          category: string
          price: number
          created_at: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string | null
          client_id: string
          budget: number
          status: 'draft' | 'open' | 'in_progress' | 'completed' | 'cancelled'
          created_at: string
        }
      }
    }
  }
}