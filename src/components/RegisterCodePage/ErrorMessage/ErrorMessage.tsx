import { FC } from 'react';
import { Message } from './ErrorMessage.styled';
import { IProps } from './ErrorMessage.types';

const ErrorMessage: FC<IProps> = ({ message }) => {
  return <Message>{message}</Message>;
};

export default ErrorMessage;
