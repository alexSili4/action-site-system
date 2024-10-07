import { ActiveMarkerId, SetActiveMarkerFunc, Shops } from '@/types/types';

export interface IProps {
  setActiveMarker: SetActiveMarkerFunc;
  activeMarkerId: ActiveMarkerId;
  markers: Shops;
  isDesktop: boolean;
}
