import { FC } from 'react';
import {
  Code,
  Container,
  Date,
  Description,
  Name,
  PrizeImg,
  PrizeInfoWrap,
  Text,
  Title,
} from './StatisticsPrize.styled';
import { IProps } from './StatisticsPrize.types';

const StatisticsPrize: FC<IProps> = ({ name, code, prizeImg }) => {
  return (
    // TODO fix
    <Container>
      <PrizeInfoWrap>
        <PrizeInfoWrap>
          <Name>{name}</Name>
          <Code>Акційний код: {code}</Code>
          <Date>Дата розіграшу: !!.!!.!!</Date>
        </PrizeInfoWrap>
        <PrizeImg src={prizeImg} alt='' />
      </PrizeInfoWrap>
      <Description>
        <Title>Як отримати</Title>
        <Text>
          !!Наш менеджер зв'яжеться з вами по телефону для уточнення деталей. Ви
          можете забрати свій приз у відділення Rozetka або скористатися
          доставкою поштовою службою.!!
        </Text>
      </Description>
    </Container>
  );
};

export default StatisticsPrize;
