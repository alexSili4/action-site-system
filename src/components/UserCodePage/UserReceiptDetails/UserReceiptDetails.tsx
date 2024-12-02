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
import { IProps } from './UserReceiptDetails.types';
// components
import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';

const UserReceiptDetails: FC<IProps> = ({
  formattedCode,
  userReceiptNumber,
  userShopNumber,
  userTotal,
}) => {
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
              <ReceiptDetailsText>{userReceiptNumber}</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>Магазин</ReceiptDetailsText>
              <ReceiptDetailsText>{userShopNumber}</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>Cума</ReceiptDetailsText>
              <ReceiptDetailsText>{userTotal}</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
          </ReceiptDetailsWrap>
        </ReceiptInfo>
        <CodeWrap>
          <CodeTitle>Акційний код:</CodeTitle>
          <Code>{formattedCode}</Code>
        </CodeWrap>
      </Content>
    </Container>
  );
};

export default UserReceiptDetails;
