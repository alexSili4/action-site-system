import { FC } from 'react';
import { Button } from './LogOutBtn.styled';

const LogOutBtn: FC = () => {
  // TODO add action
  const onLogOutBtnClick = () => {};

  return (
    <Button type='button' onClick={onLogOutBtnClick}>
      Вийти
    </Button>
  );
};

export default LogOutBtn;
