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
import SubmitRegFormBtn from '../SubmitRegFormBtn';

const RegisterUserForm: FC = () => {
  const { handleFormSubmit, register, handleSubmit, disabledBtn } =
    useRegisterUserForm();

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
          <RegisterUserCheckbox>
            <RegisterUserCheckboxTitle>
              Отримати сертифікат також на email
            </RegisterUserCheckboxTitle>
          </RegisterUserCheckbox>
        </CertificateInfoWrap>
        <RegisterUserCheckbox>
          <RegisterUserCheckboxTitle>
            Погоджуюсь з{' '}
            <a href='' target='_blank' rel='noopener noreferrer nofollow'>
              умовами участі
            </a>{' '}
            в акції
          </RegisterUserCheckboxTitle>
        </RegisterUserCheckbox>
      </Content>
      <SubmitRegFormBtn title='Зареєструвати' disabled={disabledBtn} />
    </Form>
  );
};

export default RegisterUserForm;
