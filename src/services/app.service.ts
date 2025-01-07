import HttpService from './http.service';

class AppService extends HttpService {
  constructor() {
    super();
  }

  async getIsMaintenanceMode(): Promise<boolean> {
    const response = await this.get<boolean>(
      {
        url: 'site/status',
      },
      false
    );

    return response.status === 503;
  }
}

const appService = new AppService();

export default appService;
