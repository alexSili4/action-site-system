import { getRegisterCodeLink } from '@/utils';
import useFirstUnusedUserCode from './useFirstUnusedUserCode';

const useUnusedUserCodeLink = (): string => {
  const { action_id: promotionId } = useFirstUnusedUserCode() ?? {};

  const unusedUserCodeLink = promotionId
    ? getRegisterCodeLink({ promotionId })
    : '';

  return unusedUserCodeLink;
};

export default useUnusedUserCodeLink;
