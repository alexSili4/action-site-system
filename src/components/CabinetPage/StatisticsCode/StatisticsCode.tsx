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
} from './StatisticsCode.styled';
import { Link } from 'react-router-dom';
import { IProps } from './StatisticsCode.types';
import { getUserCodeMessage } from '@/utils';
// components
import CertificateStatusLabel from '@GeneralComponents/CertificateStatusLabel';
import { useCabinetState } from '@/hooks';

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
}) => {
  const userCodeMessage = getUserCodeMessage({
    isErrorStatus,
    isSuccessStatus,
  });
  const cabinetState = useCabinetState();

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
        <CertificateWrap
          partnerLogo={partnerLogo}
          shouldShowCertificate={shouldShowCertificate}
        ></CertificateWrap>
      </ContentWrap>
      <MessagesContainer>
        <MessageWrap>
          <CertificateStatusLabel
            isErrorStatus={isErrorStatus}
            isSuccessStatus={isSuccessStatus}
          />
          <Message>{userCodeMessage}</Message>
        </MessageWrap>
      </MessagesContainer>
    </Container>
  );
};

export default StatisticsCode;
