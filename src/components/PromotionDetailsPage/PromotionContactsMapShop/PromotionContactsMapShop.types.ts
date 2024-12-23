import { InputChangeFunc } from '@/types/types';

export interface IProps {
  onChange: InputChangeFunc;
  checked: boolean;
  value: number;
  id: string;
  workSchedule: string;
  address: string;
  location: string;
}
