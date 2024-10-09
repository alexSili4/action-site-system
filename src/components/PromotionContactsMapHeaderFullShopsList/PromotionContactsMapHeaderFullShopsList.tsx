import { FC } from 'react';
import {
  Card,
  Container,
  Link,
  Title,
} from './PromotionContactsMapHeaderFullShopsList.styled';
import { IProps } from './PromotionContactsMapHeaderFullShopsList.types';

const PromotionContactsMapHeaderFullShopsList: FC<IProps> = ({
  onLinkClick,
}) => {
  return (
    <Container>
      <Card>
        <Title>Всі магазини мережі "АТБ-МАРКЕТ"</Title>
        <Link
          href='https://www.atbmarket.com/store-map?srsltid=AfmBOorMCj-pViBJa9CmXy1ew9yT-nZ90UhHLzHg0z3D5UL6Tuo59FhF'
          target='_blank'
          rel='noopener noreferrer nofollow'
          onClick={onLinkClick}
        >
          Переглянути
        </Link>
      </Card>
    </Container>
  );
};

export default PromotionContactsMapHeaderFullShopsList;
