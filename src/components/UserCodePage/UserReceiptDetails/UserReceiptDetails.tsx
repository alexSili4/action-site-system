import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import CabinetPageBreadcrumbs from '@GeneralComponents/CabinetPageBreadcrumbs';
import { FC } from 'react';
import {
  Container,
  Code,
  CodeTitle,
  CodeWrap,
  Content,
  ReceiptDetails,
  ReceiptDetailsDelimiter,
  ReceiptDetailsText,
  ReceiptDetailsWrap,
  ReceiptTitle,
  ReceiptInfo,
} from './UserReceiptDetails.styled';

const UserReceiptDetails: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs addPageTitle='Сертифікат' />
      <CabinetGoBackLink />
      <Content>
        <ReceiptInfo>
          <ReceiptTitle>ТОВ “АТБ-Маркет”</ReceiptTitle>
          <ReceiptDetailsWrap>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetails>
              <ReceiptDetailsText>№ чеку</ReceiptDetailsText>
              <ReceiptDetailsText>1346517</ReceiptDetailsText>
            </ReceiptDetails>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetails>
              <ReceiptDetailsText>Магазин</ReceiptDetailsText>
              <ReceiptDetailsText>№234</ReceiptDetailsText>
            </ReceiptDetails>
            <ReceiptDetails>
              <ReceiptDetailsText>Cума</ReceiptDetailsText>
              <ReceiptDetailsText>500₴</ReceiptDetailsText>
            </ReceiptDetails>
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
