import { FC } from 'react';
import LogOutBtn from '@CabinetPageComponents/LogOutBtn';
import CabinetHeader from '@CabinetPageComponents/CabinetHeader';
import UserInfo from '@CabinetPageComponents/UserInfo';
import { Container, ContentWrap } from './UserInfoContainer.styled';

const UserInfoContainer: FC = () => {
  return (
    <Container>
      <CabinetHeader />
      <ContentWrap>
        <UserInfo />
        <LogOutBtn />
      </ContentWrap>
    </Container>
  );
};

export default UserInfoContainer;
