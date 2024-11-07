import { FC } from 'react';
import Container from '@GeneralComponents/Container';
import Section from '@GeneralComponents/Section';
import Cabinet from '@CabinetPageComponents/Cabinet';
import { useCabinetPage } from '@/hooks';

const CabinetPage: FC = () => {
  useCabinetPage();

  return (
    <Section>
      <Container>
        <Cabinet />
      </Container>
    </Section>
  );
};

export default CabinetPage;
