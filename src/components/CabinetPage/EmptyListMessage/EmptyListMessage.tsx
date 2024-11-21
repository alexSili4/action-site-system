import { FC } from 'react';
import { Message } from './EmptyListMessage.styled';
import { IProps } from './EmptyListMessage.types';

const EmptyListMessage: FC<IProps> = ({ message }) => {
  return <Message>{message}</Message>;
};

export default EmptyListMessage;
