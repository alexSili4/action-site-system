import { IRegisterCode, IRegisterCodeRes } from '@/types/code.types';
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
}

const codesService = new CodesService();

export default codesService;
