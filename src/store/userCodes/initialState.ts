import { IUserCodesInitialState } from '@/types/userCodesState.types';

const initialState: IUserCodesInitialState = {
  items: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
