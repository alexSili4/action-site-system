import { Headers } from '@/constants';
import HttpService from './http.service';
import {
  UserCodes,
  IGetClientCodes,
  IGetClientCodesProps,
} from '@/types/userCode.types';
import {
  UserPrizes,
  IGetClientPrizes,
  IGetClientPrizesProps,
} from '@/types/userPrize.types';
import { getSortType } from '@/utils';
import { IUserCertificateWithDetails } from '@/types/userCertificateWithDetails.types';
import { IUserPrizeWithDetails } from '@/types/userPrizeWithDetails.types';
import { IUserCodeWithDetails } from '@/types/userCodeWithDetails.types';

class CabinetService extends HttpService {
  constructor() {
    super();
  }

  async getClientCodes({
    page,
    sort,
  }: IGetClientCodesProps): Promise<IGetClientCodes> {
    const sortType = getSortType(sort);

    const { data, headers } = await this.get<UserCodes>(
      {
        // TODO fix
        url: `client/my-codes?page=${page}&per-page=4&sort=${sortType}`,
      },
      false
    );

    const totalPages = headers[Headers.totalPages];

    return { data, totalPages };
  }

  async getClientPrizes({
    page,
    sort,
  }: IGetClientPrizesProps): Promise<IGetClientPrizes> {
    const sortType = getSortType(sort);

    const { data, headers } = await this.get<UserPrizes>(
      {
        // TODO fix
        url: `client/my-gifts?page=${page}&per-page=4&sort=${sortType}`,
      },
      false
    );

    const totalPages = headers[Headers.totalPages];

    return { data, totalPages };
  }

  async getCertificateDetails(
    id: string
  ): Promise<IUserCertificateWithDetails> {
    const { data } = await this.get<IUserCertificateWithDetails>(
      {
        url: `client/my-certificate?winner_id=${id}`,
      },
      false
    );

    return data;
  }

  async getPrizeDetails(id: string): Promise<IUserPrizeWithDetails> {
    const { data } = await this.get<IUserPrizeWithDetails>(
      {
        url: `client/my-present?winner_id=${id}`,
      },
      false
    );

    return data;
  }

  async getCodeDetails(id: string): Promise<IUserCodeWithDetails> {
    const { data } = await this.get<IUserCodeWithDetails>(
      {
        url: `client/my-code?id=${id}`,
      },
      false
    );

    return data;
  }
}

const cabinetService = new CabinetService();

export default cabinetService;
