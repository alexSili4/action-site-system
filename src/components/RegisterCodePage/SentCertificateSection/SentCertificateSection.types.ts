import { ActionType } from '@/types/promotion.types';

export interface IProps {
  supportServiceText: string;
  codeId: number;
  actionType: ActionType | null | undefined;
}
