import { FC } from 'react';
import CabinetPageBreadcrumbs from '@CabinetPageComponents/CabinetPageBreadcrumbs';
import UserInfo from '@CabinetPageComponents/UserInfo';
import { Container, ContentWrap } from './Cabinet.styled';
import LogOutBtn from '@CabinetPageComponents/LogOutBtn';

const Cabinet: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs />
      <ContentWrap>
        <UserInfo />
        <LogOutBtn />
      </ContentWrap>
    </Container>
  );
};

export default Cabinet;
