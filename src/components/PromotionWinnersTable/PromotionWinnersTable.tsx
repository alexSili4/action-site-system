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

const PromotionWinnersTable: FC = () => {
  // TODO delete winners
  const winners = [
    {
      name: 'хтось1',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Набір Home celebration',
    },
    {
      name: 'хтось2',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Тостер Ardesto T-F400G',
    },
    {
      name: 'хтось3',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
    {
      name: 'хтось4',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
    {
      name: 'хтось5',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
    {
      name: 'хтось6',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
    {
      name: 'хтось7',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
    {
      name: 'хтось8',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
    {
      name: 'хтось9',
      phone: 'phone',
      code: 'ys156G34O45Bio9',
      prize: 'Сертифікат на 500 грн в мережу Foxtrot',
    },
  ];

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
          {winners.map(({ name, phone, code, prize }) => (
            <Row key={name}>
              <Data>{name}</Data>
              <Data>{phone}</Data>
              <Data>{code}</Data>
              <Data>{prize}</Data>
            </Row>
          ))}
        </Body>
      </Table>
    </Container>
  );
};

export default PromotionWinnersTable;
