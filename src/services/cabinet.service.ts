import HttpService from './http.service';
import { UserCodes } from '@/types/userCode.types';

class CabinetService extends HttpService {
  constructor() {
    super();
  }

  async getClientCodes(): Promise<UserCodes> {
    const response = await this.get<UserCodes>(
      {
        url: 'client/my-codes',
      },
      false
    );
    return response.data;
  }
}

const cabinetService = new CabinetService();

export default cabinetService;
