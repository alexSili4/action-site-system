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
import { ICabinetState } from '@/types/cabinet.types';
import { Link, useLocation } from 'react-router-dom';

const StatisticsPrize: FC<IProps> = ({
  name,
  code,
  prizeImg,
  conditions,
  drawDate,
  linkPath,
}) => {
  const location = useLocation();
  const linkState: ICabinetState = { from: location };

  return (
    <Link to={linkPath} state={linkState}>
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
