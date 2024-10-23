import { FC } from 'react';
import {
  Body,
  Data,
  Head,
  Header,
  Row,
  Table,
  TableWrap,
} from './PromotionWinnersTable.styled';
import { IProps } from './PromotionWinnersTable.types';

const PromotionWinnersTable: FC<IProps> = ({ winners }) => {
  return (
    <TableWrap>
      <Table>
        <Head>
          <Row>
            <Header>Ім`я</Header>
            <Header>Телефон</Header>
            <Header>Акційний код</Header>
            <Header>Подарунок</Header>
          </Row>
        </Head>
        <Body>
          {winners.map(
            ({
              client_name: clientName,
              client_phone: clientPhone,
              code,
              gift_name: giftName,
            }) => (
              <Row key={code}>
                <Data>{clientName}</Data>
                <Data>{clientPhone}</Data>
                <Data>{code}</Data>
                <Data>{giftName}</Data>
              </Row>
            )
          )}
        </Body>
      </Table>
    </TableWrap>
  );
};

export default PromotionWinnersTable;
