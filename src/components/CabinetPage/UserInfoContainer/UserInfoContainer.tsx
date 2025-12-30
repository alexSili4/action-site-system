import { FC, MouseEvent, useEffect, useState } from 'react';
import { Container, ContentWrap } from './UserInfoContainer.styled';
// components
import LogOutBtn from '@CabinetPageComponents/LogOutBtn';
import CabinetHeader from '@CabinetPageComponents/CabinetHeader';
import UserInfo from '@CabinetPageComponents/UserInfo';
import codesService from '@/services/codes.service';
import { useCsrfToken } from '@/hooks';
import { selectUser } from '@/store/auth/selectors';
import { useAuthStore } from '@/store/store';
import { useForm } from 'react-hook-form';
import { IUserFormInput } from '@/types/cabinet.types';

const UserInfoContainer: FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { email, name, phone } = useAuthStore(selectUser);
  const { name: tokenName, token } = useCsrfToken();

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<IUserFormInput>({
    defaultValues: {
      name: name || '',
      phone: phone ? String(phone) : '',
      email: email || '',
    },
  });

  useEffect(() => {
    reset({
      name: name || '',
      phone: phone ? String(phone) : '',
      email: email || '',
    });
  }, [name, phone, email, reset]);

  const onEditBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    if (isEdit) {
      handleSubmit(onSubmit)();
      return;
    }

    setIsEdit(true);
  };

  const onSubmit = async (data: IUserFormInput) => {
    try {
      const userData = {
        ...data,
        [tokenName]: token,
      };

      await codesService.updateUserData(userData);

      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  const title = isEdit ? 'Редагувати профіль' : 'Основна інформація';
  const editBtnLabel = isSubmitting
    ? 'Збереження...'
    : isEdit
    ? 'Зберегти зміни'
    : 'Редагувати';

  return (
    <Container>
      <CabinetHeader
        editBtnLabel={editBtnLabel}
        isEdit={isEdit}
        isSubmitting={isSubmitting}
        onEditBtnClick={onEditBtnClick}
        title={title}
      />
      <ContentWrap>
        <UserInfo
          editBtnLabel={editBtnLabel}
          isEdit={isEdit}
          isSubmitting={isSubmitting}
          onEditBtnClick={onEditBtnClick}
          register={register}
          title={title}
        />
        <LogOutBtn />
      </ContentWrap>
    </Container>
  );
};

export default UserInfoContainer;
