import { SignUpFormData } from '../../pages/SignUpPage';
import { User } from '../../types/types';
import requestor from '../client/requestor';

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

class AuthService {
  async signUp(data: SignUpFormData): Promise<AuthResponse> {
    try {
      const response = await requestor.post<AuthResponse>('/auth/signUp', data);
      localStorage.setItem(
        'access_token',
        JSON.stringify({ token: response.data.accessToken })
      );
      localStorage.setItem(
        'refresh_token',
        JSON.stringify({ token: response.data.refreshToken })
      );
      localStorage.setItem('user_info', JSON.stringify(response.data.user));

      return response.data;
    } catch (error: any) {
      console.error('로그인 실패:', error);
      if (error.response && error.response.data) {
        throw error.response.data;
      }
      throw error;
    }
  }

  login() {
    return requestor;
  }

  logout() {
    // 로컬 스토리지에서 인증 관련 데이터 제거
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }
}

const authService = new AuthService();

export default authService;
