import { FC } from 'react';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import PrizeIcon from '@/icons/cabinet/prize.svg?react';
import { FaChevronRight } from 'react-icons/fa';
import { theme } from '@/constants';
import {
  CertificateWrap,
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
  StyledLink,
  CertificateLink,
} from './StatisticsCode.styled';
import { Link } from 'react-router-dom';
import { IProps } from './StatisticsCode.types';
import { getUserCodeMessage } from '@/utils';
import { useCabinetState } from '@/hooks';
// components
import CertificateStatusLabel from '@GeneralComponents/CertificateStatusLabel';
import StatisticsCodeMarksMessage from '@CabinetPageComponents/StatisticsCodeMarksMessage';

const StatisticsCode: FC<IProps> = ({
  isSuccessStatus,
  isErrorStatus,
  code,
  codeCreatedAt,
  partnerLogo,
  shouldShowUserCertificateLink,
  shouldShowUserPrizeLink,
  shouldShowCertificate,
  codeDetailsPath,
  certificateDetailsPath,
  prizeDetailsPath,
  shouldShowContent,
  shouldShowCodeLinks,
  marks,
}) => {
  const userCodeMessage = getUserCodeMessage({
    isErrorStatus,
    isSuccessStatus,
  });
  const cabinetState = useCabinetState();
  const isMarks = marks !== null;

  return (
    <Container>
      <Link to={codeDetailsPath} state={cabinetState}>
        <Header>
          <CodeWrap>
            <Code>{code}</Code>
            <Date>Активований: {codeCreatedAt}</Date>
          </CodeWrap>
          <FaChevronRight size={theme.iconSizes.cabinetCodeLink} />
        </Header>
      </Link>
      <ContentWrap shouldShowContent={shouldShowContent}>
        <LinksWrap shouldShowCodeLinks={shouldShowCodeLinks}>
          {shouldShowUserCertificateLink && (
            <StyledLink
              to={certificateDetailsPath}
              state={cabinetState}
              isCertificateLink
            >
              <CouponIcon />
              <StyledLinkTitle>Виграний Сертифікат</StyledLinkTitle>
              <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
            </StyledLink>
          )}
          {shouldShowUserPrizeLink && (
            <StyledLink to={prizeDetailsPath} state={cabinetState}>
              <PrizeIcon />
              <StyledLinkTitle>Виграний Подарунок</StyledLinkTitle>
              <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
            </StyledLink>
          )}
        </LinksWrap>
        <CertificateLink
          to={certificateDetailsPath}
          shouldShowCertificate={shouldShowCertificate}
        >
          <CertificateWrap partnerLogo={partnerLogo}></CertificateWrap>
        </CertificateLink>
      </ContentWrap>
      <MessagesContainer>
        <MessageWrap>
          <CertificateStatusLabel
            isErrorStatus={isErrorStatus}
            isSuccessStatus={isSuccessStatus}
          />
          <Message>{userCodeMessage}</Message>
        </MessageWrap>
        {isMarks && <StatisticsCodeMarksMessage marks={marks} />}
      </MessagesContainer>
    </Container>
  );
};

export default StatisticsCode;
