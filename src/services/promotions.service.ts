import { Promotions } from '@/types/promotion.types';
import HttpService from './http.service';

class PromotionsService extends HttpService {
  constructor() {
    super();
  }

  async getPromotions(cityId: string): Promise<Promotions> {
    const response = await this.get<Promotions>(
      {
        url: `promotions?city_id=${cityId}`,
      },
      false
    );
    return response.data;
  }
}

const promotionsService = new PromotionsService();

export default promotionsService;
