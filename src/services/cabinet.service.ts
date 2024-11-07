import HttpService from './http.service';
import { UserCodes, IGetClientCodes } from '@/types/userCode.types';
import { UserPrizes, IGetClientPrizes } from '@/types/userPrize.types';

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

  async getClientPrizes(page: number): Promise<IGetClientPrizes> {
    const { data, headers } = await this.get<UserPrizes>(
      {
        url: `client/my-gifts?page=${page}&per-page=4`,
      },
      false
    );

    const totalPages = headers['x-pagination-page-count'];

    return { data, totalPages };
  }
}

const cabinetService = new CabinetService();

export default cabinetService;
