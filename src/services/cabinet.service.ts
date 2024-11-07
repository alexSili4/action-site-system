import HttpService from './http.service';
import { UserCodes, IGetClientCodes } from '@/types/userCode.types';
import { UserPrizes } from '@/types/userPrize.types';

class CabinetService extends HttpService {
  constructor() {
    super();
  }

  async getClientCodes(page: number): Promise<IGetClientCodes> {
    const { data, headers } = await this.get<UserCodes>(
      {
        url: `client/my-codes?page=${page}&per-page=4`,
      },
      false
    );

    const totalPages = headers['x-pagination-page-count'];

    return { data, totalPages };
  }

  async getClientGifts(): Promise<UserPrizes> {
    const response = await this.get<UserPrizes>(
      {
        url: 'client/my-gifts',
      },
      false
    );

    return response.data;
  }
}

const cabinetService = new CabinetService();

export default cabinetService;
