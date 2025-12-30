import { theme } from '@/constants';
import { BtnClickEvent, ListRef } from '@/types/types';
import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import {
  Container,
  Controls,
  InfoBtn,
  InfoBtnTitle,
  InfoList,
  InfoListWrap,
  InfoWrap,
  ListItem,
  Title,
  TitleWrap,
  EditUserBtnWrap,
} from './UserInfo.styled';
import { makeBlur } from '@/utils';
import EditUserBtn from '@CabinetPageComponents/EditUserBtn';
import { UseFormRegister } from 'react-hook-form';
import { IUserFormInput } from '@/types/cabinet.types';

const UserInfo: FC<{
  isEdit: boolean;
  isSubmitting: boolean;
  onEditBtnClick: MouseEventHandler;
  title: string;
  editBtnLabel: string;
  register: UseFormRegister<IUserFormInput>;
}> = ({
  isEdit,
  isSubmitting,
  onEditBtnClick,
  title,
  editBtnLabel,
  register,
}) => {
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
      <Controls>
        <InfoBtn type='button' onClick={onInfoBtnClick} showInfo={showInfo}>
          <FaChevronUp size={theme.iconSizes.userInfoBtn} />
          <InfoBtnTitle>{title}</InfoBtnTitle>
        </InfoBtn>

        <EditUserBtnWrap>
          <EditUserBtn
            onClick={onEditBtnClick}
            disabled={isSubmitting}
            label={editBtnLabel}
            showIcon={!isEdit}
          />
        </EditUserBtnWrap>
      </Controls>
      <InfoListWrap showInfo={showInfo}>
        <InfoList scrollHeight={scrollHeight} showInfo={showInfo} ref={infoRef}>
          <ListItem>
            <TitleWrap>
              <Title>Ім&#8217;я</Title>
            </TitleWrap>
            <InfoWrap
              {...register('name')}
              readOnly={!isEdit}
              autoComplete='name'
            />
          </ListItem>
          <ListItem>
            <TitleWrap>
              <Title>Телефон</Title>
            </TitleWrap>
            <InfoWrap {...register('phone')} readOnly autoComplete='tel' />
          </ListItem>
          <ListItem>
            <TitleWrap>
              <Title>Email</Title>
            </TitleWrap>
            <InfoWrap
              {...register('email')}
              readOnly={!isEdit}
              autoComplete='email'
            />
          </ListItem>
        </InfoList>
      </InfoListWrap>
    </Container>
  );
};

export default UserInfo;
