import { AuthService } from './auth-service';
import type { LoginData, SignUpData } from './types';

const authService = AuthService.getInstance();

export async function signUp(data: SignUpData) {
  return authService.signUp(data);
}

export async function signIn(email: string, password: string) {
  return authService.login({ email, password });
}

export async function signOut() {
  return authService.logout();
}

export async function getCurrentUser() {
  return authService.getCurrentUser();
}