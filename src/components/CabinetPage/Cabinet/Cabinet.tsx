import { FC } from 'react';
import CabinetPageBreadcrumbs from '@CabinetPageComponents/CabinetPageBreadcrumbs';
import { Container } from './Cabinet.styled';

const Cabinet: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs />
    </Container>
  );
};

export default Cabinet;
