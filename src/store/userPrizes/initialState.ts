import { IUserPrizesInitialState } from '@/types/userPrizesState.types';

const initialState: IUserPrizesInitialState = {
  items: [],
  totalPages: 0,
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default initialState;
