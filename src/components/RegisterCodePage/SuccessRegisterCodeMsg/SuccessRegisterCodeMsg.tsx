import { FC } from 'react';
import { PagePaths } from '@/constants';
import {
  Container,
  CabinetLink,
  Message,
  MessageTitle,
  MessageWrap,
  Text,
} from './SuccessRegisterCodeMsg.styled';
import { IProps } from './SuccessRegisterCodeMsg.types';

const SuccessRegisterCodeMsg: FC<IProps> = ({
  supportServiceText,
  userName,
  message,
}) => {
  return (
    <Container>
      <MessageWrap>
        <MessageTitle>Дякуємо, {userName}!</MessageTitle>
        <Message>{message}</Message>
      </MessageWrap>
      <CabinetLink to={PagePaths.cabinet}>Особистий кабінет</CabinetLink>
      <Text>{supportServiceText}</Text>
    </Container>
  );
};

export default SuccessRegisterCodeMsg;
