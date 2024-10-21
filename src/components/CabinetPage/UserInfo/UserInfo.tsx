import { theme } from '@/constants';
import { selectUser } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { BtnClickEvent, ListRef } from '@/types/types';
import { FC, useEffect, useRef, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import {
  Container,
  Data,
  InfoBtn,
  InfoBtnTitle,
  InfoList,
  InfoListWrap,
  InfoWrap,
  ListItem,
  Title,
  TitleWrap,
} from './UserInfo.styled';
import { makeBlur } from '@/utils';

const UserInfo: FC = () => {
  const { email, name, phone } = useAuthStore(selectUser);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const infoRef = useRef<ListRef>(null);
  const scrollHeight = infoRef.current?.scrollHeight ?? 0;

  useEffect(() => {
    setShowInfo(true);
  }, []);

  const toggleSetShowInfo = () => {
    setShowInfo((prevState) => !prevState);
  };

  const onInfoBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleSetShowInfo();
  };

  return (
    <Container>
      <InfoBtn type='button' onClick={onInfoBtnClick} showInfo={showInfo}>
        <InfoBtnTitle>Основна інформація</InfoBtnTitle>
        <FaChevronUp size={theme.iconSizes.userInfoBtn} />
      </InfoBtn>
      <InfoListWrap showInfo={showInfo}>
        <InfoList scrollHeight={scrollHeight} showInfo={showInfo} ref={infoRef}>
          <ListItem>
            <InfoWrap>
              <TitleWrap>
                <Title>Ім&#8217;я</Title>
              </TitleWrap>
              <Data>{name}</Data>
            </InfoWrap>
          </ListItem>
          <ListItem>
            <InfoWrap>
              <TitleWrap>
                <Title>Телефон</Title>
              </TitleWrap>
              <Data>{phone}</Data>
            </InfoWrap>
          </ListItem>
          <ListItem>
            <InfoWrap>
              <TitleWrap>
                <Title>Email</Title>
              </TitleWrap>
              <Data>{email}</Data>
            </InfoWrap>
          </ListItem>
        </InfoList>
      </InfoListWrap>
    </Container>
  );
};

export default UserInfo;
