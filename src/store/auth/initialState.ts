import { IAuthInitialState } from '@/types/authStore.types';

const initialState: IAuthInitialState = {
  user: {
    id: null,
    name: null,
    phone: null,
    email: null,
  },
  // TODO return
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

export default initialState;
