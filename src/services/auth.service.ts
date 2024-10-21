import { Refresh } from '@/types/authStore.types';
import HttpService from './http.service';

class AuthService extends HttpService {
  constructor() {
    super();
  }

  async refresh(): Promise<Refresh> {
    const response = await this.get<Refresh>(
      {
        url: 'getuser',
      },
      false
    );
    return response.data;
  }

  async logout(): Promise<undefined> {
    const response = await this.post<undefined, undefined>(
      {
        url: 'logout',
      },
      false
    );
    return response.data;
  }
}

const authService = new AuthService();

export default authService;
