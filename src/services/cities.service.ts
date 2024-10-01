import { Cities } from '@/types/city.types';
import HttpService from './http.service';

class CitiesService extends HttpService {
  constructor() {
    super();
  }

  async getCities(): Promise<Cities> {
    const response = await this.get<Cities>(
      {
        url: 'cities',
      },
      false
    );
    return response.data;
  }
}

const citiesService = new CitiesService();

export default citiesService;
