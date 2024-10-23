import { Shops } from '@/types/shop.types';
import { ActiveMarkerId, InputChangeFunc } from '@/types/types';

export interface IProps {
  onInputChange: InputChangeFunc;
  shops: Shops;
  activeMarkerId: ActiveMarkerId;
}
