import { FC } from 'react';
import { Backdrop } from './DropdownBackdrop.styled';
import { IProps } from './DropdownBackdrop.types';

const DropdownBackdrop: FC<IProps> = ({ onClick }) => {
  return <Backdrop onClick={onClick} />;
};

export default DropdownBackdrop;
