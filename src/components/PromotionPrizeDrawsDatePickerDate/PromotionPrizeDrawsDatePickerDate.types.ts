import { InputChangeFunc } from '@/types/types';

export interface IProps {
  name: string;
  value: string;
  onChange: InputChangeFunc;
  checked: boolean;
}
