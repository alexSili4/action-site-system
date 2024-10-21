import { FC } from 'react';
import CabinetPageBreadcrumbs from '@CabinetPageComponents/CabinetPageBreadcrumbs';
import UserInfo from '@CabinetPageComponents/UserInfo';
import { Container } from './Cabinet.styled';

const Cabinet: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs />
      <UserInfo />
    </Container>
  );
};

export default Cabinet;
