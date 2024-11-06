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

const StatisticsPrize: FC = () => {
  return (
    // TODO fix
    <Container>
      <PrizeInfoWrap>
        <PrizeInfoWrap>
          <Name>Кухонна машина TEFAL QB813D38</Name>
          <Code>Акційний код: WZYW26UCER4M</Code>
          <Date>Дата розіграшу: 07.10.24</Date>
        </PrizeInfoWrap>
        <PrizeImg src='' alt='' />
      </PrizeInfoWrap>
      <Description>
        <Title>Як отримати</Title>
        <Text>
          Наш менеджер зв'яжеться з вами по телефону для уточнення деталей. Ви
          можете забрати свій приз у відділення Rozetka або скористатися
          доставкою поштовою службою.
        </Text>
      </Description>
    </Container>
  );
};

export default StatisticsPrize;
