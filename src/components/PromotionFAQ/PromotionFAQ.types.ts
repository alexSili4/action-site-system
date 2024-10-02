import { IFAQ } from '@/types/types';

export interface IProps {
  faq: IFAQ;
}

export interface IStyledProps {
  showAnswer: boolean;
}

export interface IStyledAnswerWrapProps extends IStyledProps {
  scrollHeight: number;
}
