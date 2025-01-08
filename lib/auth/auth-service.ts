import { createClient } from '../supabase/client';
import { AuthResponse, LoginData, SignUpData } from './types';

export class AuthService {
  private static instance: AuthService;
  private supabase = createClient();

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async signUp({ email, password, userType }: SignUpData): Promise<AuthResponse> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
        options: {
          data: { user_type: userType },
        },
      });

      if (error) throw error;

      if (data.user) {
        const { error: profileError } = await this.supabase
          .from('profiles')
          .insert({
            user_id: data.user.id,
            user_type: userType,
          });

        if (profileError) throw profileError;
      }

      return { user: data.user, error: null };
    } catch (error) {
      return { user: null, error: error as Error };
    }
  }

  async login({ email, password }: LoginData): Promise<AuthResponse> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { user: data.user, error: null };
    } catch (error) {
      return { user: null, error: error as Error };
    }
  }

  async getCurrentUser(): Promise<AuthResponse> {
    try {
      const { data: { user }, error } = await this.supabase.auth.getUser();
      if (error) throw error;
      return { user, error: null };
    } catch (error) {
      return { user: null, error: error as Error };
    }
  }
}