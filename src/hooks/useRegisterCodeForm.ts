import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegCodeFormData } from '@/types/regCode.types';
import { generalSettings } from '@/constants';
import {
  HTMLInputElements,
  IChangeFocusToNextRegCodeInputProps,
  IGetRegCodeInputProps,
  InputChangeEvent,
  Func,
} from '@/types/types';
import codesService from '@/services/codes.service';
import { usePromotionId } from '@/hooks';
import { IRegisterCodeRes, RegisterCodeErr } from '@/types/code.types';
import { getCurrentInputIndex } from '@/utils';
import { IUseRegisterCodeForm } from '@/types/hooks.types';

const useRegisterCodeForm = (
  incrementCurrentStep: Func
): IUseRegisterCodeForm => {
  const [error, setError] = useState<RegisterCodeErr>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFullRegCode, setIsFullRegCode] = useState<boolean>(false);
  const [regCodeInputs, setRegCodeInputs] = useState<HTMLInputElements>([]);
  const inputWrapRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit } = useForm<IRegCodeFormData>();
  const promotionId = usePromotionId();
  const isError = Boolean(error);

  const inputMaxLength = generalSettings.regCodeLength / 3;

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
            targetError.errors.code.join(generalSettings.regCodeErrSeparator)
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
      generalSettings.regCodeLength / regCodeInputs.length;
    const isFullValue = valueLength === inputFullLength;

    return { inputFullLength, isFullValue };
  };

  const onRegCodeInput = (e: InputChangeEvent) => {
    const { value } = e.currentTarget;
    const { inputFullLength, isFullValue } = getRegCodeInputProps(value.length);

    changeFocusToNextInput({ isFullValue, currentInput: e.currentTarget });
    setIsFullRegCodeStatus(inputFullLength);
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
    inputWrapRef,
    isError,
    onRegCodeInput,
    inputMaxLength,
    error,
    disabledSubmitRegFormBtn,
  };
};

export default useRegisterCodeForm;
