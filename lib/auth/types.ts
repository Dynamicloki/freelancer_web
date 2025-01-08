export interface AuthResponse {
  user: any;
  error: Error | null;
}

export interface SignUpData {
  email: string;
  password: string;
  userType: 'freelancer' | 'client';
}

export interface LoginData {
  email: string;
  password: string;
}