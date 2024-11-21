import { InputChangeFunc } from '@/types/types';

export interface IProps {
  settings: object;
  placeholder: string;
  defaultValue?: string;
  maxLength?: number;
  onChange?: InputChangeFunc;
}
