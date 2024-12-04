import { FC } from 'react';
import {
  CertificateInfo,
  CertificateInfoWrap,
  Content,
  Form,
  InputWrap,
  Label,
  LabelWrap,
  Input,
  RegisterUserCheckboxTitle,
} from './RegisterUserForm.styled';
import { useRegisterUserForm } from '@/hooks';
import { IProps } from './RegisterUserForm.types';
import { InputPlaceholders } from '@/constants';
// components
import RegisterUserCheckbox from '@RegisterCodePageComponents/RegisterFormCheckbox';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';

const RegisterUserForm: FC<IProps> = ({ toggleShowSuccessMsgState }) => {
  const { handleFormSubmit, register, handleSubmit, disabledBtn } =
    useRegisterUserForm(toggleShowSuccessMsgState);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <InputWrap>
          <LabelWrap>
            <Label>Ім’я</Label>
          </LabelWrap>
          <Input
            type='text'
            {...register('name', {
              required: true,
            })}
            placeholder={InputPlaceholders.enterName}
          />
        </InputWrap>
        <CertificateInfoWrap>
          <CertificateInfo>
            Сертифікат зберігатиметься в вашому кабінеті.
          </CertificateInfo>
          <RegisterUserCheckbox
            settings={{
              ...register('sendCertificate'),
            }}
          >
            <RegisterUserCheckboxTitle>
              Отримати сертифікат також на email
            </RegisterUserCheckboxTitle>
          </RegisterUserCheckbox>
        </CertificateInfoWrap>
      </Content>
      <SubmitRegFormBtn title='Завершити' disabled={disabledBtn} />
    </Form>
  );
};

export default RegisterUserForm;
