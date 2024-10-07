import { InputChangeFunc } from '@/types/types';

export interface IProps {
  onChange: InputChangeFunc;
  checked: boolean;
  value: number;
  name: string;
  id:string
}
