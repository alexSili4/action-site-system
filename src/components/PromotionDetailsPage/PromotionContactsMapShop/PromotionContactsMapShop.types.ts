import { InputChangeFunc } from '@/types/types';

export interface IProps {
  onChange: InputChangeFunc;
  checked: boolean;
  value: number;
  id: string;
  workHours: string;
  address: string;
  location: string;
  disabled: boolean;
}

export interface IStyledContainerProps {
  disabled: boolean;
}
