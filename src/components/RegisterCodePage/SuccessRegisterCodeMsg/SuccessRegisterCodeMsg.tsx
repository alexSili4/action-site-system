import { FC } from 'react';
import { PagePaths } from '@/constants';
import {
  Container,
  CabinetLink,
  Message,
  Text,
  MessagePart,
  TextWrap,
  AdditionalInfoWrap,
  Content,
} from './SuccessRegisterCodeMsg.styled';
import { IProps } from './SuccessRegisterCodeMsg.types';
// components
import StatisticsCodeMarksMessage from '@/components/General/StatisticsCodeMarksMessage';
import { getIsPromotionWheelType } from '@/utils';

const SuccessRegisterCodeMsg: FC<IProps> = ({
  supportServiceText,
  userName,
  message,
  marks,
  actionType,
}) => {
  const isPromotionWheelType = getIsPromotionWheelType(actionType);
  const isMarks = marks !== null && !isPromotionWheelType;

  return (
    <Container>
      <Content>
        <Message>
          <MessagePart>Дякуємо, {userName}!</MessagePart>
          <TextWrap />
          <TextWrap isHiddenOnDesk />
          <MessagePart>{message}</MessagePart>
        </Message>
        <AdditionalInfoWrap>
          {isMarks && (
            <StatisticsCodeMarksMessage
              marks={marks}
              mobSize={66}
              deskSize={66}
              isRegisterCodePage
            />
          )}
          <CabinetLink to={PagePaths.cabinet}>Особистий кабінет</CabinetLink>
        </AdditionalInfoWrap>
      </Content>
      <Text>{supportServiceText}</Text>
    </Container>
  );
};

export default SuccessRegisterCodeMsg;
