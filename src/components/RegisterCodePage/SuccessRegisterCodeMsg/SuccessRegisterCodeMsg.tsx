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
  hotLineWorkHours,
  hotLinePhone,
}) => {
  return (
    <Container>
      <MessageWrap>
        <MessageTitle>
          {/* TODO fix */}
          Дякуємо, ________!
        </MessageTitle>
        <Message>
          Ваш акційний код буде зареєстровано протягом доби. Ви можете
          перевірити статус акційного коду та сертифікату у Вашому Особистому
          кабінеті.
        </Message>
      </MessageWrap>
      <CabinetLink to={PagePaths.cabinet}>Особистий кабінет</CabinetLink>
      <Text>
        Якщо Вам не вдалося зареєструвати акційний код зверніться на гарячу
        лінію за телефоном {hotLinePhone} ({hotLineWorkHours})
      </Text>
    </Container>
  );
};

export default SuccessRegisterCodeMsg;
