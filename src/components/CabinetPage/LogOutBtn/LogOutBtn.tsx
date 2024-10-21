import { FC } from 'react';
import { Container, Button } from './LogOutBtn.styled';
import { useAuthStore } from '@/store/store';
import { selectLogout } from '@/store/auth/selectors';
import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';

const LogOutBtn: FC = () => {
  const logout = useAuthStore(selectLogout);

  const onLogOutBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    logout();
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
