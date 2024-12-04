import { IRegisterCode, IRegisterCodeRes, Partners } from '@/types/code.types';
import HttpService from './http.service';

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
}

const codesService = new CodesService();

export default codesService;
