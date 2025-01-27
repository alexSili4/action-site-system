import { IRegisterCodePageState } from '@/types/code.types';
import useFirstUnusedUserCode from './useFirstUnusedUserCode';

const useRegisterUnusedCodeState = (): IRegisterCodePageState => {
  const { id } = useFirstUnusedUserCode() ?? {};
  const registerCodeState: IRegisterCodePageState = {
    defaultCodeId: id,
  };

  return registerCodeState;
};

export default useRegisterUnusedCodeState;
