import { FC } from 'react';
import {
  Code,
  Container,
  Date,
  Description,
  Name,
  PrizeImgWrap,
  PrizeImg,
  PrizeInfoWrap,
  PrizeInfo,
  Text,
  Title,
  Accent,
} from './StatisticsPrize.styled';
import { IProps } from './StatisticsPrize.types';
import { Link } from 'react-router-dom';
import { useCabinetState } from '@/hooks';

const StatisticsPrize: FC<IProps> = ({
  name,
  code,
  prizeImg,
  conditions,
  drawDate,
  linkPath,
}) => {
  const cabinetState = useCabinetState();

  return (
    <Link to={linkPath} state={cabinetState}>
      <Container>
        <PrizeInfoWrap>
          <PrizeInfo>
            <Name>{name}</Name>
            <Code>
              <Accent>Акційний код:</Accent> {code}
            </Code>
            <Date>
              <Accent>Дата розіграшу:</Accent> {drawDate}
            </Date>
          </PrizeInfo>
          <PrizeImgWrap>
            <PrizeImg src={prizeImg} alt='приз' />
          </PrizeImgWrap>
        </PrizeInfoWrap>
        <Description>
          <Title>Як отримати</Title>
          <Text>{conditions}</Text>
        </Description>
      </Container>
    </Link>
  );
};

export default StatisticsPrize;
