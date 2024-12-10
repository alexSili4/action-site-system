import { IUnusedUserCodesInitialState } from '@/types/unusedUserCodesStore.types';

const initialState: IUnusedUserCodesInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
