import { FC } from 'react';
import { IProps } from './RegisterCodeForm.types';
import {
  Form,
  Content,
  InputWrap,
  LabelWrap,
  Label,
  InputDelimiterWrap,
  InputDelimiter,
  ErrorMessage,
} from './RegisterCodeForm.styled';
import CodePartInput from '@RegisterCodePageComponents/CodePartInput';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';
import { useRegisterCodeForm } from '@/hooks';

const RegisterCodeForm: FC<IProps> = ({ incrementCurrentStep }) => {
  const {
    handleFormSubmit,
    register,
    handleSubmit,
    inputWrapRef,
    isError,
    onRegCodeInput,
    inputMaxLength,
    error,
    disabledBtn,
  } = useRegisterCodeForm(incrementCurrentStep);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Content>
        <InputWrap ref={inputWrapRef} isError={isError}>
          <LabelWrap>
            <Label>Код з чеку</Label>
          </LabelWrap>
          <CodePartInput
            onChange={onRegCodeInput}
            maxLength={inputMaxLength}
            settings={{
              ...register('codePart1', {
                required: true,
                maxLength: inputMaxLength,
              }),
            }}
          />
          <InputDelimiterWrap isError={isError}>
            <InputDelimiter />
          </InputDelimiterWrap>
          <CodePartInput
            onChange={onRegCodeInput}
            maxLength={inputMaxLength}
            settings={{
              ...register('codePart2', {
                required: true,
                maxLength: inputMaxLength,
              }),
            }}
          />
          <InputDelimiterWrap isError={isError}>
            <InputDelimiter />
          </InputDelimiterWrap>
          <CodePartInput
            onChange={onRegCodeInput}
            maxLength={inputMaxLength}
            settings={{
              ...register('codePart3', {
                required: true,
                maxLength: inputMaxLength,
              }),
            }}
          />
        </InputWrap>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Content>
      <SubmitRegFormBtn
        title='Підтвердити і крутити Колесо подарунків'
        disabled={disabledBtn}
      />
    </Form>
  );
};

export default RegisterCodeForm;
