import { FC } from 'react';
import {
  CertificateInfo,
  CertificateInfoWrap,
  Content,
  Form,
  InputWrap,
  Label,
  LabelWrap,
  RegisterUserCheckboxTitle,
  RegisterUserCheckboxLink,
  AcceptedTermsWrap,
  Input,
} from './RegisterUserForm.styled';
import RegisterUserCheckbox from '@RegisterCodePageComponents/RegisterUserCheckbox';
import { useRegisterUserForm, useTargetPromotionData } from '@/hooks';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';
import { IProps } from './RegisterUserForm.types';

const RegisterUserForm: FC<IProps> = ({ setShowSuccessMsgState }) => {
  const { rulesPdf } = useTargetPromotionData();
  const { handleFormSubmit, register, handleSubmit, disabledBtn } =
    useRegisterUserForm(setShowSuccessMsgState);

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
        <AcceptedTermsWrap>
          <RegisterUserCheckbox
            settings={{
              ...register('acceptedTerms'),
            }}
          >
            <RegisterUserCheckboxTitle>
              Погоджуюсь з{' '}
              <RegisterUserCheckboxLink
                href={rulesPdf}
                download='rules'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                умовами участі
              </RegisterUserCheckboxLink>{' '}
              в акції
            </RegisterUserCheckboxTitle>
          </RegisterUserCheckbox>
        </AcceptedTermsWrap>
      </Content>
      <SubmitRegFormBtn title='Зареєструвати' disabled={disabledBtn} />
    </Form>
  );
};

export default RegisterUserForm;
