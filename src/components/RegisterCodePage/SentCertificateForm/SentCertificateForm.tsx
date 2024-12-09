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
  SentCertificateCheckboxTitle,
} from './SentCertificateForm.styled';
import { useSentCertificateForm } from '@/hooks';
import { IProps } from './SentCertificateForm.types';
import { InputPlaceholders, regExp } from '@/constants';
// components
import RegisterFormCheckbox from '@RegisterCodePageComponents/RegisterFormCheckbox';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';

const SentCertificateForm: FC<IProps> = ({
  toggleShowSuccessMsgState,
  updateUserName,
  userName,
  codeId,
}) => {
  const {
    handleFormSubmit,
    register,
    handleSubmit,
    disabledBtn,
    isUserName,
    defaultUserName,
  } = useSentCertificateForm({
    toggleShowSuccessMsgState,
    updateUserName,
    userName,
    codeId,
  });

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <InputWrap>
          <LabelWrap>
            <Label>Ім’я</Label>
          </LabelWrap>
          <Input
            type='text'
            {...register('name', { required: !isUserName })}
            defaultValue={defaultUserName}
            placeholder={InputPlaceholders.enterName}
            disabled={isUserName}
          />
        </InputWrap>
        <CertificateInfoWrap>
          <CertificateInfo>
            Сертифікат зберігатиметься в вашому кабінеті.
          </CertificateInfo>
          <RegisterFormCheckbox
            settings={{
              ...register('sendCertificate'),
            }}
          >
            <SentCertificateCheckboxTitle>
              Отримати сертифікат також на email
            </SentCertificateCheckboxTitle>
          </RegisterFormCheckbox>
        </CertificateInfoWrap>
        <InputWrap>
          <LabelWrap>
            <Label>Email</Label>
          </LabelWrap>
          <Input
            type='email'
            {...register('email', {
              pattern: regExp.email,
            })}
            placeholder={InputPlaceholders.email}
          />
        </InputWrap>
      </Content>
      <SubmitRegFormBtn title='Завершити' disabled={disabledBtn} />
    </Form>
  );
};

export default SentCertificateForm;
