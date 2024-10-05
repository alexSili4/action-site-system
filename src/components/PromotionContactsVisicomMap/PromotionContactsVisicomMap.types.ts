import { ActiveMarkerId, SetActiveMarkerFunc } from '@/types/types';

export interface IProps {
  setActiveMarker: SetActiveMarkerFunc;
  activeMarkerId: ActiveMarkerId;
}
