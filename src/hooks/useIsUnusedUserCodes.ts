import { useUnusedUserCodesStore } from '@/store/store';
import { selectUnusedUserCodes } from '@/store/unusedUserCodes/selectors';

const useIsUnusedUserCodes = () => {
  const unusedUserCodes = useUnusedUserCodesStore(selectUnusedUserCodes);
  const unusedUserCodesLength = unusedUserCodes.length;
  const isUnusedUserCodes = Boolean(unusedUserCodesLength);

  return isUnusedUserCodes;
};

export default useIsUnusedUserCodes;
