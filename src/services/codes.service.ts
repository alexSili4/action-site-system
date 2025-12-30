import {
  IRegisterCode,
  IRegisterCodeRes,
  ISpinWheelResult,
  Partners,
  IUserData,
  IUserDataWithCode,
} from '@/types/code.types';
import HttpService from './http.service';
import { ClientCodes } from '@/types/userCodeWithDetails.types';

class CodesService extends HttpService {
  constructor() {
    super();
  }

  async register(data: IRegisterCode): Promise<IRegisterCodeRes> {
    const response = await this.post<IRegisterCodeRes, IRegisterCode>(
      {
        url: 'code/register',
        data,
      },
      false
    );

    return response.data;
  }

  async getPartners(codeId: number): Promise<Partners> {
    const response = await this.get<Partners>(
      {
        url: `client/wheel/get-partners-for-wheel?code_id=${codeId}`,
      },
      false
    );

    return response.data;
  }

  async spinWheel(codeId: number): Promise<ISpinWheelResult> {
    const response = await this.get<ISpinWheelResult>(
      {
        url: `client/wheel/spin-the-wheel?code_id=${codeId}`,
      },
      false
    );

    return response.data;
  }

  async getUserData(codeId: number): Promise<IUserDataWithCode> {
    const response = await this.get<IUserDataWithCode>(
      {
        url: `client/info/name-form?code_id=${codeId}`,
      },
      false
    );

    return response.data;
  }

  async updateUserData({ ...data }: IUserData): Promise<IUserDataWithCode> {
    const response = await this.post<IUserDataWithCode, IUserData>(
      {
        url: 'client/info/name-form',
        data,
      },
      false
    );

    return response.data;
  }

  async getUnusedCodes(): Promise<ClientCodes> {
    const response = await this.get<ClientCodes>(
      {
        url: 'client/info/get-codes-for-wheel',
      },
      false
    );

    return response.data;
  }
}

const codesService = new CodesService();

export default codesService;
