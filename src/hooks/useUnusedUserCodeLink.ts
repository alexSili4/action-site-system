import { getRegisterCodeLink } from '@/utils';
import useFirstUnusedUserCode from './useFirstUnusedUserCode';

const useUnusedUserCodeLink = (): string => {
  const { code } = useFirstUnusedUserCode() ?? {};

  const unusedUserCodeLink = code ? getRegisterCodeLink({ code }) : '';

  return unusedUserCodeLink;
};

export default useUnusedUserCodeLink;
