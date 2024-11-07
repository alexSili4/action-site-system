import { FC } from 'react';
import {
  Code,
  Container,
  Date,
  Description,
  Name,
  PrizeImg,
  PrizeInfoWrap,
  PrizeInfo,
  Text,
  Title,
} from './StatisticsPrize.styled';
import { IProps } from './StatisticsPrize.types';

const StatisticsPrize: FC<IProps> = ({ name, code, prizeImg }) => {
  return (
    <Container>
      <PrizeInfoWrap>
        <PrizeInfo>
          <Name>{name}</Name>
          <Code>Акційний код: {code}</Code>
          <Date>Дата розіграшу: !!.!!.!!</Date>
        </PrizeInfo>
        <PrizeImg src={prizeImg} alt='' />
      </PrizeInfoWrap>
      <Description>
        <Title>Як отримати</Title>
        <Text>!!</Text>
      </Description>
    </Container>
  );
};

export default StatisticsPrize;
