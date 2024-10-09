import { FC } from 'react';
import {
  Body,
  Data,
  Head,
  Header,
  Row,
  Table,
  Container,
} from './PromotionWinnersTable.styled';
import { IProps } from './PromotionWinnersTable.types';

const PromotionWinnersTable: FC<IProps> = ({ winners }) => {
  return (
    <Container>
      <Table>
        <Head>
          <Row>
            <Header>Імя</Header>
            <Header>Телефон</Header>
            <Header>Акційний код</Header>
            <Header>Подарунок</Header>
          </Row>
        </Head>
        <Body>
          {winners.map(({ name, phone, code, gift_name: giftName, id }) => (
            <Row key={id}>
              <Data>{name}</Data>
              <Data>{phone}</Data>
              <Data>{code}</Data>
              <Data>{giftName}</Data>
            </Row>
          ))}
        </Body>
      </Table>
    </Container>
  );
};

export default PromotionWinnersTable;
