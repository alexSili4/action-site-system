import { PagePaths } from '@/constants';

export interface IProps {
  to: PagePaths;
  isHiddenOnMobile?: boolean;
}

export interface IStyledProps {
  isHiddenOnMobile: boolean;
}
