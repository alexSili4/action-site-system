import { Refresh } from '@/types/authStore.types';
import HttpService from './http.service';
import { ICsrfToken } from '@/types/types';

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

  async logout(data: ICsrfToken): Promise<undefined> {
    const response = await this.post<undefined, ICsrfToken>(
      {
        url: 'logout',
        data,
      },
      false
    );
    return response.data;
  }
}

const authService = new AuthService();

export default authService;
