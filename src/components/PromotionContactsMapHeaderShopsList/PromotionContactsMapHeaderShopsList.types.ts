import { ActiveMarkerId, SetActiveMarkerFunc, Shops } from '@/types/types';

export interface IProps {
  activeMarkerId: ActiveMarkerId;
  markers: Shops;
  setActiveMarker: SetActiveMarkerFunc;
}
