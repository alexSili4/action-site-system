import { Shops } from '@/types/shop.types';
import { ActiveMarkerId, SetActiveMarkerFunc } from '@/types/types';

export interface IProps {
  setActiveMarker: SetActiveMarkerFunc;
  activeMarkerId: ActiveMarkerId;
  shops: Shops;
  isNationalPromotion: boolean;
}
