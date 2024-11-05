import { FC } from 'react';
import {
  CertificateInfo,
  CertificateInfoWrap,
  Content,
  Form,
  Input,
  InputWrap,
  Label,
  LabelWrap,
  RegisterUserCheckboxTitle,
} from './RegisterUserForm.styled';
import RegisterUserCheckbox from '@RegisterCodePageComponents/RegisterUserCheckbox';
import { useRegisterUserForm } from '@/hooks';

const RegisterUserForm: FC = () => {
  const { handleFormSubmit, register, handleSubmit } = useRegisterUserForm();

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
            placeholder='Вкажіть своє ім’я'
          />
        </InputWrap>
        <CertificateInfoWrap>
          <CertificateInfo>
            Сертифікат зберігатиметься в вашому кабінеті.
          </CertificateInfo>
          {/* Отримати сертифікат також на email */}
        </CertificateInfoWrap>
        <RegisterUserCheckbox>
          <RegisterUserCheckboxTitle>{/*  */}</RegisterUserCheckboxTitle>
        </RegisterUserCheckbox>
      </Content>
    </Form>
  );
};

export default RegisterUserForm;
