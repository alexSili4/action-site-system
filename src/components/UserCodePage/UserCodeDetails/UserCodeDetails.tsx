import { FC } from 'react';

import AtbLogo from '@/icons/atbLogo.svg?react';
import {
  Content,
  Container,
  Title,
  TitleWrap,
  CodeInfo,
  MainInfoWrap,
  UserCodeInfoDelimiter,
} from './UserCodeDetails.styled';
import { IProps } from './UserCodeDetails.types';
// components
import UserCodeStatus from '@UserCodePageComponents/UserCodeStatus';
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import UserCodeDetailsPrizesInfo from '@UserCodePageComponents/UserCodeDetailsPrizesInfo';
import UserCodeDetailsMainInfo from '@UserCodePageComponents/UserCodeDetailsMainInfo';

const UserCodeDetails: FC<IProps> = ({
  isErrorStatus,
  isSuccessStatus,
  shouldShowCertificateInfo,
  certificateDetailsPath,
  wheelCertificateCode,
  prizeDetailsPath,
  presentGiftName,
  shouldShowPrizeInfo,
  shouldShowPrizesInfo,
  drawCertificateDate,
  drawPrizeDate,
  promotionDetailsPath,
  actionName,
  codeCreatedAtDate,
  drawDate,
  shopAddress,
  receiptNumber,
  marks,
}) => {
  return (
    <Container>
      <CabinetGoBackLink />
      <Content>
        <MainInfoWrap>
          <CodeInfo>
            <TitleWrap>
              <Title>Акційний код АТБ</Title>
              <AtbLogo />
            </TitleWrap>
            <UserCodeStatus
              isErrorStatus={isErrorStatus}
              isSuccessStatus={isSuccessStatus}
            />
          </CodeInfo>
          <UserCodeDetailsMainInfo
            promotionDetailsPath={promotionDetailsPath}
            actionName={actionName}
            codeCreatedAtDate={codeCreatedAtDate}
            drawDate={drawDate}
            shopAddress={shopAddress}
            receiptNumber={receiptNumber}
            marks={marks}
          />
        </MainInfoWrap>
        <UserCodeInfoDelimiter></UserCodeInfoDelimiter>
        {shouldShowPrizesInfo && (
          <UserCodeDetailsPrizesInfo
            shouldShowCertificateInfo={shouldShowCertificateInfo}
            certificateDetailsPath={certificateDetailsPath}
            wheelCertificateCode={wheelCertificateCode}
            prizeDetailsPath={prizeDetailsPath}
            presentGiftName={presentGiftName}
            shouldShowPrizeInfo={shouldShowPrizeInfo}
            isSuccessStatus={isSuccessStatus}
            drawCertificateDate={drawCertificateDate}
            drawPrizeDate={drawPrizeDate}
          />
        )}
      </Content>
    </Container>
  );
};

export default UserCodeDetails;
