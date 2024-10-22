import { Refresh } from '@/types/authStore.types';
import HttpService from './http.service';
import { ICsrf } from '@/types/types';

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

  async logout(data: ICsrf): Promise<undefined> {
    const response = await this.post<undefined, ICsrf>(
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
