import { Promotions } from '@/types/promotion.types';
import { useEffect, useState } from 'react';
import useCityId from './useCityId';
import promotionsService from '@/services/promotions.service';
import { IUsePreviousPromotions } from '@/types/hooks.types';

const usePreviousPromotions = (): IUsePreviousPromotions => {
  const [promotions, setPromotions] = useState<Promotions>([]);
  const cityId = useCityId();
  const isPreviousPromotions = Boolean(promotions.length);

  useEffect(() => {
    const getPromotions = async (cityId: string) => {
      const response = await promotionsService.getPromotions({
        cityId,
        isPreviousCategory: true,
      });

      setPromotions(response);
    };

    getPromotions(cityId);
  }, [cityId]);

  return { isPreviousPromotions, promotions };
};

export default usePreviousPromotions;
