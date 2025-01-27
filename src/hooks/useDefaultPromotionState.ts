import { useTargetPromotion } from '@/hooks';
import { IRegisterCodePageState } from '@/types/code.types';

const useDefaultPromotionState = (): IRegisterCodePageState => {
  const defaultPromotion = useTargetPromotion();
  const registerCodePageState = {
    defaultPromotion,
  };

  return registerCodePageState;
};

export default useDefaultPromotionState;
