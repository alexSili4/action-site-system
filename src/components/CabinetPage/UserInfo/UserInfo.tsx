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
import { UseFormRegister, useFormContext } from 'react-hook-form';
import { IUserFormInput } from '@/types/cabinet.types';

const UserInfo: FC<{
  isEdit: boolean;
  isSubmitting: boolean;
  onEditBtnClick: MouseEventHandler;
  title: string;
  editBtnLabel: string;
  register: UseFormRegister<IUserFormInput>;
  allFieldsFilled?: boolean;
}> = ({
  isEdit,
  isSubmitting,
  onEditBtnClick,
  title,
  editBtnLabel,
  register,
  allFieldsFilled,
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const infoRef = useRef<ListRef>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const { watch } = useFormContext<IUserFormInput>();

  const scrollHeight = infoRef.current?.scrollHeight ?? 0;

  // Отримуємо поточні значення полів для задізейблювання
  const nameValue = watch('name') || '';
  const emailValue = watch('email') || '';

  useEffect(() => {
    setShowInfo(true);
  }, []);

  useEffect(() => {
    if (isEdit && nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [isEdit]);

  const toggleSetShowInfo = () => {
    setShowInfo((prevState) => !prevState);
  };

  const onInfoBtnClick = (e: BtnClickEvent) => {
    makeBlur(e.currentTarget);

    toggleSetShowInfo();
  };

  const { ref: nameRegisterRef, ...nameRegisterProps } = register('name', {
    required: true,
  });

  return (
    <Container>
      <Controls>
        <InfoBtn type='button' onClick={onInfoBtnClick} showInfo={showInfo}>
          <FaChevronUp size={theme.iconSizes.userInfoBtn} />
          <InfoBtnTitle>{title}</InfoBtnTitle>
        </InfoBtn>

        {!allFieldsFilled && (
          <EditUserBtnWrap>
            <EditUserBtn
              onClick={onEditBtnClick}
              disabled={isSubmitting}
              label={editBtnLabel}
              showIcon={!isEdit}
            />
          </EditUserBtnWrap>
        )}
      </Controls>
      <InfoListWrap showInfo={showInfo}>
        <InfoList scrollHeight={scrollHeight} showInfo={showInfo} ref={infoRef}>
          <ListItem>
            <TitleWrap>
              <Title>Ім&#8217;я</Title>
            </TitleWrap>
            <InfoWrap
              {...nameRegisterProps}
              ref={(element) => {
                nameRegisterRef(element);
                nameInputRef.current = element;
              }}
              readOnly={!isEdit}
              disabled={nameValue !== ''}
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
              {...register('email', { required: true })}
              readOnly={!isEdit}
              disabled={emailValue !== ''}
              autoComplete='email'
            />
          </ListItem>
        </InfoList>
      </InfoListWrap>
    </Container>
  );
};

export default UserInfo;
