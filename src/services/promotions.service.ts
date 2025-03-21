import {
  Promotions,
  IPromotion,
  IGetPromotionByIdProps,
  IGetPromotionsProps,
} from '@/types/promotion.types';
import { Conditions } from '@/types/condition.types';
import { Prizes } from '@/types/prize.types';
import { FAQs } from '@/types/faqs.types';
import { WinnersByDates } from '@/types/winner.types';
import HttpService from './http.service';
import { Shops } from '@/types/shop.types';
import { IGetPromotionByCode } from '@/types/types';
import { BigPrizes } from '@/types/bigPrize.types';

class PromotionsService extends HttpService {
  constructor() {
    super();
  }

  async getPromotions({
    cityId,
    isPreviousCategory,
  }: IGetPromotionsProps): Promise<Promotions> {
    const url = `promotions/city?city_id=${cityId}`;
    const targetUrl = isPreviousCategory ? `${url}&category=previous` : url;

    const response = await this.get<Promotions>(
      {
        url: targetUrl,
      },
      false
    );
    return response.data;
  }

  async getPromotionById({
    actionId,
    previewId,
  }: IGetPromotionByIdProps): Promise<IPromotion> {
    const promotionUrl = `promotions/promo?action_id=${actionId}`;
    const fullPromotionUrl = previewId
      ? `${promotionUrl}&preview=${previewId}`
      : promotionUrl;

    const response = await this.get<IPromotion>(
      {
        url: fullPromotionUrl,
      },
      false
    );

    return response.data;
  }

  async getPromotionByCode(code: string): Promise<IGetPromotionByCode> {
    const promotionUrl = `code/find-action?code=${code}`;

    const response = await this.get<IGetPromotionByCode>(
      {
        url: promotionUrl,
      },
      false
    );

    return response.data;
  }

  async getConditions(actionId: string): Promise<Conditions> {
    const response = await this.get<Conditions>(
      {
        url: `promotions/conditions?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getWheelPrizes(actionId: string): Promise<Prizes> {
    const response = await this.get<Prizes>(
      {
        url: `promotions/gifts-for-wheel2?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getWheelBigPrizes(actionId: string): Promise<BigPrizes> {
    const response = await this.get<BigPrizes>(
      {
        url: `promotions/get-general-prizes-for-wheel?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getPresentPrizes(actionId: string): Promise<Prizes> {
    const response = await this.get<Prizes>(
      {
        url: `promotions/gifts-for-raffle2?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getPresentBigPrizes(actionId: string): Promise<BigPrizes> {
    const response = await this.get<BigPrizes>(
      {
        url: `promotions/get-general-prizes-for-present?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getFAQs(actionId: string): Promise<FAQs> {
    const response = await this.get<FAQs>(
      {
        url: `promotions/queries?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getWinners(actionId: string): Promise<WinnersByDates> {
    const response = await this.get<WinnersByDates>(
      {
        url: `promotions/winners?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }

  async getShops(actionId: string): Promise<Shops> {
    const response = await this.get<Shops>(
      {
        url: `promotions/shops?action_id=${actionId}`,
      },
      false
    );
    return response.data;
  }
}

const promotionsService = new PromotionsService();

export default promotionsService;
