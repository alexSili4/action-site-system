import { IUserCodesInitialState } from '@/types/userCodesState.types';

const initialState: IUserCodesInitialState = {
  items: [],
  totalPages: 0,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
