import { PagePaths } from '@/constants';
import { PageLocation } from '@/types/types';

export interface IProps {
  from: PageLocation | PagePaths | undefined;
  isShowOnDesk?: boolean;
}

export interface IStyledContainerProps {
  isShowOnDesk: boolean;
}
