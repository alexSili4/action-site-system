import { FC } from 'react';
import { IProps } from './PrivateRoute.types';
import { useAuthStore } from '@/store/store';
import { selectIsLoggedIn, selectIsRefreshing } from '@/store/auth/selectors';
import { useLocation } from 'react-router-dom';
import { generalSettings } from '@/constants';

const PrivateRoute: FC<IProps> = ({ element }) => {
  const isLoggedIn = useAuthStore(selectIsLoggedIn);
  const isRefreshing = useAuthStore(selectIsRefreshing);
  const { pathname } = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const redirectUrl = `${generalSettings.authLink}&redirectUrl=${pathname}`;

  return shouldRedirect ? (window.location.href = redirectUrl) : element;
};

export default PrivateRoute;
