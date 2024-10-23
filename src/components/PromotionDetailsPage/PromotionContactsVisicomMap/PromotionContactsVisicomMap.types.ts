import { ActiveShopNum, SetActiveShopFunc, Shops } from '@/types/shop.types';

export interface IProps {
  setActiveShop: SetActiveShopFunc;
  activeShopNum: ActiveShopNum;
  shops: Shops;
}
