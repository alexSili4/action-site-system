import { Shops } from '@/types/shop.types';
import { isAfter } from 'date-fns';

const filterShopsByPromoDateEnd = (shops: Shops): Shops => {
  const filteredShops = Array.isArray(shops)
    ? shops.filter(({ promo_shop_date_end: promoShopDateEnd }) => {
        const currentDate = new Date();
        const isActivePromotion = isAfter(promoShopDateEnd, currentDate);

        return isActivePromotion;
      })
    : [];

  return filteredShops;
};

export default filterShopsByPromoDateEnd;
