import { FC } from 'react';
import CabinetPageBreadcrumbs from '@CabinetPageComponents/CabinetPageBreadcrumbs';
import UserInfo from '@CabinetPageComponents/UserInfo';
import { Container, ContentWrap } from './Cabinet.styled';
import LogOutBtn from '@CabinetPageComponents/LogOutBtn';
import CabinetHeader from '@CabinetPageComponents/CabinetHeader';

const Cabinet: FC = () => {
  return (
    <Container>
      <CabinetPageBreadcrumbs />
      <CabinetHeader />
      <ContentWrap>
        <UserInfo />
        <LogOutBtn />
      </ContentWrap>
    </Container>
  );
};

export default Cabinet;
