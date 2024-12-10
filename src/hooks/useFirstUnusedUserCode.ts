import { useUnusedUserCodesStore } from '@/store/store';
import { selectUnusedUserCodes } from '@/store/unusedUserCodes/selectors';
import { IClientCode } from '@/types/userCodeWithDetails.types';

const useFirstUnusedUserCode = (): IClientCode => {
  const unusedUserCodes = useUnusedUserCodesStore(selectUnusedUserCodes);
  const firstUnusedUserCode = unusedUserCodes[0];

  return firstUnusedUserCode;
};

export default useFirstUnusedUserCode;
