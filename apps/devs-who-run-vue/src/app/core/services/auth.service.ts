import axios from 'axios';

interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

interface LoginCredentials {
  gitHubUserName: string;
  password: string;
}

interface RegisterCredentials extends LoginCredentials {
  email: string;
  confirmPassword: string;
}

export class AuthService {
  private static readonly API_URL = '/api/auth';
  private static readonly GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
  private static readonly GITHUB_REDIRECT_URI = `${window.location.origin}/auth/github/callback`;

  static async login(credentials: LoginCredentials): Promise<User> {
    const response = await axios.post(`${this.API_URL}/login`, credentials);
    return response.data;
  }

  static async register(credentials: RegisterCredentials): Promise<User> {
    const response = await axios.post(`${this.API_URL}/register`, credentials);
    return response.data;
  }

  static async githubLogin(): Promise<void> {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${this.GITHUB_CLIENT_ID}&redirect_uri=${this.GITHUB_REDIRECT_URI}&scope=user:email`;
    window.location.href = githubAuthUrl;
  }

  static async handleGithubCallback(code: string): Promise<User> {
    const response = await axios.post(`${this.API_URL}/github/callback`, { code });
    return response.data;
  }

  static async getCurrentUser(): Promise<User | null> {
    try {
      const response = await axios.get(`${this.API_URL}/me`);
      return response.data;
    } catch {
      return null;
    }
  }

  static async logout(): Promise<void> {
    await axios.post(`${this.API_URL}/logout`);
  }

  static async sendResetEmail(email: string): Promise<void> {
    await axios.post(`${this.API_URL}/forgot-password`, { email });
  }
}
