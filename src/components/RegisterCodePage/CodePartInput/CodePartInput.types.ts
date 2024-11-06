import { InputChangeFunc } from '@/types/types';

export interface IProps {
  settings: object;
  defaultValue?: string;
  maxLength?: number;
  onChange?: InputChangeFunc;
}
