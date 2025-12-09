// types/authTypes.ts
export interface UserProfile {
  id: string;
  name: string;
  email?: string;
}

export interface AuthState {
  user: UserProfile | null;
  status: 'idle' | 'loading';
  initialized: boolean;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}
