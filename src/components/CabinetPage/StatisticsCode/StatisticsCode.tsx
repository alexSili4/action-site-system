import { FC } from 'react';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import PrizeIcon from '@/icons/cabinet/prize.svg?react';
import { FaChevronRight } from 'react-icons/fa';
import { PagePaths, theme } from '@/constants';
import CertificateStatusLabel from '@GeneralComponents/CertificateStatusLabel';
import {
  CertificateImg,
  Code,
  Container,
  ContentWrap,
  Date,
  Header,
  LinksWrap,
  Message,
  MessagesContainer,
  MessageWrap,
  StyledLinkTitle,
  CodeWrap,
} from './StatisticsCode.styled';
import { Link } from 'react-router-dom';
import { IProps } from './StatisticsCode.types';

const StatisticsCode: FC<IProps> = ({
  certificateImg,
  isSuccessStatus,
  isErrorStatus,
  code,
  codeCreatedAt,
}) => {
  return (
    <Container>
      <Link to={code}>
        <Header>
          <CodeWrap>
            <Code>{code}</Code>
            <Date>Активований: {codeCreatedAt}</Date>
          </CodeWrap>
          <FaChevronRight size={theme.iconSizes.cabinetCodeLink} />
        </Header>
      </Link>
      <ContentWrap>
        <LinksWrap>
          <Link to={PagePaths.userCode}>
            <CouponIcon />
            <StyledLinkTitle>Виграний Сертифікат</StyledLinkTitle>
            <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
          </Link>
          <Link to={PagePaths.userPrize}>
            <PrizeIcon />
            <StyledLinkTitle>Виграний Подарунок</StyledLinkTitle>
            <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
          </Link>
        </LinksWrap>
        <CertificateImg src={certificateImg} alt='Зображення сертифіката' />
      </ContentWrap>
      <MessagesContainer>
        <MessageWrap>
          <CertificateStatusLabel
            isErrorStatus={isErrorStatus}
            isSuccessStatus={isSuccessStatus}
          />
          <Message>
            Сертифікат надіслано на ваш email, а тут інший текст, для більшого
            простору
          </Message>
        </MessageWrap>
      </MessagesContainer>
    </Container>
  );
};

export default StatisticsCode;
