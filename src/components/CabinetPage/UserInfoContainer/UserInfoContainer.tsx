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
import { useForm, FormProvider } from 'react-hook-form';
import { IUserFormInput } from '@/types/cabinet.types';

const UserInfoContainer: FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { email, name, phone } = useAuthStore(selectUser);
  const { name: tokenName, token } = useCsrfToken();

  const methods = useForm<IUserFormInput>({
    defaultValues: {
      name: name || '',
      phone: phone ? String(phone) : '',
      email: email || '',
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

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

  const nameValue = watch('name') || '';
  const emailValue = watch('email') || '';
  const allFieldsFilled = nameValue !== '' && emailValue !== '';

  const title = isEdit ? 'Заповнити профіль' : 'Основна інформація';
  const editBtnLabel = isSubmitting
    ? 'Збереження...'
    : isEdit
    ? 'Зберегти зміни'
    : 'Заповнити';

  return (
    <FormProvider {...methods}>
      <Container>
        <CabinetHeader
          editBtnLabel={editBtnLabel}
          isEdit={isEdit}
          isSubmitting={isSubmitting}
          onEditBtnClick={onEditBtnClick}
          title={title}
          allFieldsFilled={allFieldsFilled}
        />
        <ContentWrap>
          <UserInfo
            editBtnLabel={editBtnLabel}
            isEdit={isEdit}
            isSubmitting={isSubmitting}
            onEditBtnClick={onEditBtnClick}
            register={register}
            title={title}
            allFieldsFilled={allFieldsFilled}
          />
          <LogOutBtn />
        </ContentWrap>
      </Container>
    </FormProvider>
  );
};

export default UserInfoContainer;
