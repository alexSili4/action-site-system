import { FC, useState } from 'react';
import { IProps } from './RegisterCodeForm.types';
import {
  Form,
  InputWrap,
  LabelWrap,
  Label,
  InputDelimiterWrap,
  InputDelimiter,
} from './RegisterCodeForm.styled';
import Input from '@RegisterCodePageComponents/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegCodeFormData } from '@/types/regCode.types';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';
import { GeneralSettings } from '@/constants';

const RegisterCodeForm: FC<IProps> = ({ incrementCurrentStep }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    // formState: { isSubmitting, errors },
  } = useForm<IRegCodeFormData>();
  const inputMaxLength = GeneralSettings.regCodeLength / 3;
  const codePart1Length = watch('codePart1')?.length ?? 0;
  const codePart2Length = watch('codePart2')?.length ?? 0;
  const codePart3Length = watch('codePart3')?.length ?? 0;

  const regCodeLength = codePart1Length + codePart2Length + codePart3Length;
  const isValidRegCodeLength = regCodeLength === GeneralSettings.regCodeLength;
  const disabledSubmitRegFormBtn = !isValidRegCodeLength || isLoading;

  const handleFormSubmit: SubmitHandler<IRegCodeFormData> = async (data) => {
    console.log(data);
    setIsLoading(true);
    incrementCurrentStep();
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputWrap>
        <LabelWrap>
          <Label>Код з чеку</Label>
        </LabelWrap>
        <Input
          maxLength={inputMaxLength}
          settings={{
            ...register('codePart1', {
              required: true,
            }),
          }}
        />
        <InputDelimiterWrap>
          <InputDelimiter />
        </InputDelimiterWrap>
        <Input
          maxLength={inputMaxLength}
          settings={{
            ...register('codePart2', {
              required: true,
            }),
          }}
        />
        <InputDelimiterWrap>
          <InputDelimiter />
        </InputDelimiterWrap>
        <Input
          maxLength={inputMaxLength}
          settings={{
            ...register('codePart3', {
              required: true,
            }),
          }}
        />
      </InputWrap>
      <SubmitRegFormBtn
        title='Підтвердити і крутити Колесо подарунків'
        disabled={disabledSubmitRegFormBtn}
      />
    </Form>
  );
};

export default RegisterCodeForm;
