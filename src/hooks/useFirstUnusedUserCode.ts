import { useUnusedUserCodesStore } from '@/store/store';
import { selectUnusedUserCodes } from '@/store/unusedUserCodes/selectors';
import { UseFirstUnusedUserCode } from '@/types/hooks.types';

const useFirstUnusedUserCode = (): UseFirstUnusedUserCode => {
  const unusedUserCodes = useUnusedUserCodesStore(selectUnusedUserCodes);
  const firstUnusedUserCode = unusedUserCodes[0];

  return firstUnusedUserCode;
};

export default useFirstUnusedUserCode;
