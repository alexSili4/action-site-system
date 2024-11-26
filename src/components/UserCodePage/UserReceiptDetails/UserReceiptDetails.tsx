import { FC } from 'react';
import {
  Container,
  Code,
  CodeTitle,
  CodeWrap,
  Content,
  ReceiptDetailsItem,
  ReceiptDetailsDelimiter,
  ReceiptDetailsText,
  ReceiptDetailsWrap,
  ReceiptTitle,
  ReceiptInfo,
} from './UserReceiptDetails.styled';
import { generalSettings } from '@/constants';
import { IProps } from './UserReceiptDetails.types';
// components
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';

const UserReceiptDetails: FC<IProps> = ({ isVerifiedCode }) => {
  // TODO fix
  const receiptNumber = isVerifiedCode
    ? 1346517
    : generalSettings.defaultReceiptText;
  const shopNumber = isVerifiedCode
    ? '№234'
    : generalSettings.defaultReceiptText;
  const total = isVerifiedCode ? '500₴' : generalSettings.defaultReceiptText;

  return (
    <Container>
      <CabinetGoBackLink isShowOnDesk />
      <Content>
        <ReceiptInfo>
          <ReceiptTitle>ТОВ “АТБ-Маркет”</ReceiptTitle>
          <ReceiptDetailsWrap>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>№ чеку</ReceiptDetailsText>
              <ReceiptDetailsText>{receiptNumber}</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>Магазин</ReceiptDetailsText>
              <ReceiptDetailsText>{shopNumber}</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>Cума</ReceiptDetailsText>
              <ReceiptDetailsText>{total}</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
          </ReceiptDetailsWrap>
        </ReceiptInfo>
        <CodeWrap>
          <CodeTitle>Акційний код:</CodeTitle>
          <Code>ZU2L-MFSZ-YWE3</Code>
        </CodeWrap>
      </Content>
    </Container>
  );
};

export default UserReceiptDetails;
