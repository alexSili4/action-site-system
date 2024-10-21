import { FC } from 'react';
import { Container, Button } from './LogOutBtn.styled';

const LogOutBtn: FC = () => {
  // TODO add action
  const onLogOutBtnClick = () => {};

  return (
    <Container>
      <Button type='button' onClick={onLogOutBtnClick}>
        Вийти
      </Button>
    </Container>
  );
};

export default LogOutBtn;
