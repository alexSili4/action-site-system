import { FC } from 'react';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import GiftIcon from '@/icons/cabinet/gift.svg?react';
import { FaChevronRight } from 'react-icons/fa';
import { theme } from '@/constants';
import SuccessStatusLabel from '@GeneralComponents/SuccessStatusLabel';
import InfoStatusLabel from '@GeneralComponents/InfoStatusLabel';
import ErrorStatusLabel from '@GeneralComponents/ErrorStatusLabel';

const StatisticsCode: FC = ({
  certificateImg,
  isSuccessStatus,
  isInfoStatus,
  isErrorStatus,
}) => {
  return (
    <Container>
      <Header>
        <Code>ZU2L-MFSZ-YWE3</Code>
        <Date>Активований: 07.10.24</Date>
      </Header>
      <ContentWrap>
        <LinksWrap>
          <StyledLink>
            <CouponIcon />
            <StyledLinkTitle>Виграний Сертифікат</StyledLinkTitle>
            <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
          </StyledLink>
          <StyledLink>
            <GiftIcon />
            <StyledLinkTitle>Виграний Подарунок</StyledLinkTitle>
            <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
          </StyledLink>
        </LinksWrap>
        <CertificateImg src={certificateImg} />
      </ContentWrap>
      <Messages>
        <MessageWrap>
          {isSuccessStatus && <SuccessStatusLabel />}
          {isInfoStatus && <InfoStatusLabel />}
          {isErrorStatus && <ErrorStatusLabel />}
          <Message>Сертифікат надіслано на ваш email</Message>
        </MessageWrap>
      </Messages>
    </Container>
  );
};

export default StatisticsCode;
