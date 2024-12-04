import { ActiveShopNum, Shops } from '@/types/shop.types';
import { SetNumberFunc } from '@/types/types';

export interface IProps {
  setActiveShop: SetNumberFunc;
  activeShopNum: ActiveShopNum;
  shops: Shops;
}
