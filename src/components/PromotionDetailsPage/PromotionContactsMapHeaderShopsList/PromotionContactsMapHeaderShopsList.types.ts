import { ActiveShopNum, Shops } from '@/types/shop.types';
import { InputChangeFunc } from '@/types/types';

export interface IProps {
  onInputChange: InputChangeFunc;
  shops: Shops;
  activeShopNum: ActiveShopNum;
}
