import { IAuthState } from '@/types/authStore.types';

export const selectIsLoggedIn = (state: IAuthState) => state.isLoggedIn;

export const selectUser = (state: IAuthState) => state.user;

export const selectIsLoading = (state: IAuthState) => state.isLoading;

export const selectIsRefreshing = (state: IAuthState) => state.isRefreshing;

export const selectRefresh = (state: IAuthState) => state.refresh;

export const selectLogout = (state: IAuthState) => state.logout;
