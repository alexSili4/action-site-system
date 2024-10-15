import { FC } from 'react';
import Promotions from '@/components/Promotions';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';

const PromotionsPage: FC = () => {
  return (
    <Section>
      <Container>
        <Promotions />
      </Container>
    </Section>
  );
};

export default PromotionsPage;
