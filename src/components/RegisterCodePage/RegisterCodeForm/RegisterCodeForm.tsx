import { FC, useEffect, useRef, useState } from 'react';
import { IProps } from './RegisterCodeForm.types';
import {
  Form,
  InputWrap,
  LabelWrap,
  Label,
  InputDelimiterWrap,
  InputDelimiter,
  ErrorMessage,
} from './RegisterCodeForm.styled';
import Input from '@RegisterCodePageComponents/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegCodeFormData } from '@/types/regCode.types';
import SubmitRegFormBtn from '@RegisterCodePageComponents/SubmitRegFormBtn';
import { GeneralSettings } from '@/constants';
import {
  HTMLInputElements,
  IChangeFocusToNextRegCodeInputProps,
  IGetRegCodeInputProps,
  InputChangeEvent,
} from '@/types/types';
import codesService from '@/services/codes.service';
import { usePromotionId } from '@/hooks';
import { IRegisterCodeRes } from '@/types/code.types';
import { getCurrentInputIndex } from '@/utils';

const RegisterCodeForm: FC<IProps> = ({ incrementCurrentStep }) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFullRegCode, setIsFullRegCode] = useState<boolean>(false);
  const [regCodeInputs, setRegCodeInputs] = useState<HTMLInputElements>([]);
  const inputWrapRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit } = useForm<IRegCodeFormData>();
  const promotionId = usePromotionId();
  const isError = Boolean(error);

  const inputMaxLength = GeneralSettings.regCodeLength / 3;

  const disabledSubmitRegFormBtn = !isFullRegCode || isLoading;

  const startRegisterCode = () => {
    setError(null);
    setIsLoading(true);
  };

  const handleFormSubmit: SubmitHandler<IRegCodeFormData> = async (data) => {
    const code = Object.values(data).join('');

    try {
      startRegisterCode();
      const response = await codesService.register({
        code,
        action_id: Number(promotionId),
      });

      const isError = response.result !== 'ok';

      if (isError) {
        throw new Error(JSON.stringify(response));
      }

      incrementCurrentStep();
    } catch (error) {
      if (error instanceof Error) {
        const targetError: IRegisterCodeRes = JSON.parse(error.message);
        const isValidationError = targetError.result === 'error';

        if (isValidationError) {
          setError(
            targetError.errors.code.join(GeneralSettings.regCodeErrSeparator)
          );
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const regCodeInputs = inputWrapRef.current?.querySelectorAll('input');

    if (!regCodeInputs?.length) {
      return;
    }

    setRegCodeInputs([...regCodeInputs]);
  }, []);

  useEffect(() => {
    const onBackspacePress = (e: KeyboardEvent) => {
      const currentInput = e.target;

      if (!currentInput) {
        return;
      }

      const inputIndex = getCurrentInputIndex({
        currentInput,
        regCodeInputs,
      });
      const targetInput = regCodeInputs[inputIndex];
      const isBackspace = e.code === 'Backspace';
      const isFirstInput = !inputIndex;

      const shouldChangeFocusToPrevInput =
        isBackspace && !targetInput.value && !isFirstInput;

      if (shouldChangeFocusToPrevInput) {
        regCodeInputs[inputIndex - 1].focus();
      }
    };

    window.addEventListener('keydown', onBackspacePress);

    return () => {
      window.removeEventListener('keydown', onBackspacePress);
    };
  }, [regCodeInputs]);

  const setIsFullRegCodeStatus = (inputFullLength: number) => {
    const isFullRegCode = regCodeInputs.every(
      ({ value }) => value.length === inputFullLength
    );

    if (isFullRegCode) {
      setIsFullRegCode(true);
    } else {
      setIsFullRegCode(false);
    }
  };

  const changeFocusToNextInput = ({
    currentInput,
    isFullValue,
  }: IChangeFocusToNextRegCodeInputProps) => {
    const inputIndex = getCurrentInputIndex({
      currentInput,
      regCodeInputs,
    });

    const lastInputIndex = regCodeInputs.length - 1;
    const isLastInput = inputIndex === lastInputIndex;

    const shouldChangeFocusToNextInput = isFullValue && !isLastInput;

    if (shouldChangeFocusToNextInput) {
      regCodeInputs[inputIndex + 1].focus();
    }
  };

  const getRegCodeInputProps = (valueLength: number): IGetRegCodeInputProps => {
    const inputFullLength =
      GeneralSettings.regCodeLength / regCodeInputs.length;
    const isFullValue = valueLength === inputFullLength;

    return { inputFullLength, isFullValue };
  };

  const onRegCodeInput = (e: InputChangeEvent) => {
    const { value } = e.currentTarget;
    const { inputFullLength, isFullValue } = getRegCodeInputProps(value.length);

    changeFocusToNextInput({ isFullValue, currentInput: e.currentTarget });
    setIsFullRegCodeStatus(inputFullLength);
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputWrap ref={inputWrapRef} isError={isError}>
        <LabelWrap>
          <Label>Код з чеку</Label>
        </LabelWrap>
        <Input
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
        <Input
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
        <Input
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
      <SubmitRegFormBtn
        title='Підтвердити і крутити Колесо подарунків'
        disabled={disabledSubmitRegFormBtn}
      />
    </Form>
  );
};

export default RegisterCodeForm;
