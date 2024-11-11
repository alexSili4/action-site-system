import { PromotionDetailsState } from '@/types/promotion.types';
import { useLocation } from 'react-router-dom';

const useFromLocation = () => {
  const { state }: PromotionDetailsState = useLocation();
  const from = state?.from;

  return from;
};

export default useFromLocation;
