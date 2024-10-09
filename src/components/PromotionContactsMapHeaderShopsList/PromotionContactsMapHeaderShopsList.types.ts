import { ActiveMarkerId, InputChangeFunc, Shops } from '@/types/types';

export interface IProps {
  onInputChange: InputChangeFunc;
  markers: Shops;
  activeMarkerId: ActiveMarkerId;
}
