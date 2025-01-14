import { InputChangeFunc, StringOrNull } from '@/types/types';

export interface IProps {
  onChange: InputChangeFunc;
  checked: boolean;
  value: number;
  id: string;
  workSchedule: StringOrNull;
  address: string;
  location: string;
}
