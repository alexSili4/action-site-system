import { FC } from 'react';
import { Container, Button } from './LogOutBtn.styled';
import { useAuthStore } from '@/store/store';
import { selectLogout, selectError } from '@/store/auth/selectors';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useCsrfToken } from '@/hooks';
import useStoreError from '@/hooks/useStoreError';

const LogOutBtn: FC = () => {
  const logout = useAuthStore(selectLogout);
  const error = useAuthStore(selectError);
  const { name, token } = useCsrfToken();
  useStoreError(error);

  const onLogOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    const logoutData = { [name]: token };
    logout(logoutData);
  };

  return (
    <Container>
      <Button type='button' onClick={onLogOutBtnClick}>
        Вийти
      </Button>
    </Container>
  );
};

export default LogOutBtn;
