import { FC, useEffect } from 'react';
import CouponIcon from '@/icons/cabinet/coupon.svg?react';
import PrizeIcon from '@/icons/cabinet/prize.svg?react';
import { FaChevronRight } from 'react-icons/fa';
import { PagePaths, theme } from '@/constants';
import CertificateStatusLabel from '@GeneralComponents/CertificateStatusLabel';
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
import { Link, useLocation } from 'react-router-dom';
import { IProps } from './StatisticsCode.types';
import { getUserCodeMessage } from '@/utils';

const StatisticsCode: FC<IProps> = ({
  isSuccessStatus,
  isErrorStatus,
  code,
  codeCreatedAt,
  partnerLogo,
  shouldShowUserCertificateLink,
  shouldShowUserPrizeLink,
  shouldShowCertificate,
}) => {
  const userCodeMessage = getUserCodeMessage({
    isErrorStatus,
    isSuccessStatus,
  });
  const location = useLocation();
  const userCertificateLinkState = { from: location };
  const shouldShowCodeLinks =
    shouldShowUserPrizeLink || shouldShowUserCertificateLink;
  const shouldShowContent = shouldShowCodeLinks || shouldShowCertificate;

  useEffect(() => {
    console.log(shouldShowCodeLinks);
  }, [shouldShowCodeLinks]);

  return (
    <Container>
      <Link to={PagePaths.userCode}>
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
              to={PagePaths.userCertificate}
              state={userCertificateLinkState}
              isCertificateLink
            >
              <CouponIcon />
              <StyledLinkTitle>Виграний Сертифікат</StyledLinkTitle>
              <FaChevronRight size={theme.iconSizes.cabinetSectionLink} />
            </StyledLink>
          )}
          {shouldShowUserPrizeLink && (
            <StyledLink to={PagePaths.userPrize}>
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
