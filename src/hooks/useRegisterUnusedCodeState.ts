import { IRegisterUnusedCodeState } from '@/types/code.types';
import useFirstUnusedUserCode from './useFirstUnusedUserCode';

const useRegisterUnusedCodeState = (): IRegisterUnusedCodeState => {
  const { id } = useFirstUnusedUserCode() ?? {};
  const registerCodeState: IRegisterUnusedCodeState = {
    defaultCodeId: id,
  };

  return registerCodeState;
};

export default useRegisterUnusedCodeState;
