import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegCodeFormData } from '@/types/regCode.types';
import { generalSettings, SearchParamsKeys } from '@/constants';
import {
  HTMLInputElements,
  IChangeFocusToNextRegCodeInputProps,
  IGetRegCodeInputProps,
  InputChangeEvent,
  StringOrNull,
} from '@/types/types';
import codesService from '@/services/codes.service';
import { useCsrfToken, useSetSearchParams } from '@/hooks';
import { IRegisterCodeRes } from '@/types/code.types';
import { getCurrentInputIndex, splitString } from '@/utils';
import {
  IUseRegisterCodeForm,
  IUseRegisterCodeFormProps,
} from '@/types/hooks.types';

const useRegisterCodeForm = ({
  onSuccessRegisterCode,
  updatePromotion,
}: IUseRegisterCodeFormProps): IUseRegisterCodeForm => {
  const [error, setError] = useState<StringOrNull>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFullRegCode, setIsFullRegCode] = useState<boolean>(false);
  const [regCodeInputs, setRegCodeInputs] = useState<HTMLInputElements>([]);
  const inputWrapRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, watch, setValue } =
    useForm<IRegCodeFormData>();
  const { name: csrfTokenName, token: csrfToken } = useCsrfToken();
  const { searchParams } = useSetSearchParams();
  const isError = Boolean(error);
  const acceptedTerms = watch('acceptedTerms');
  const defaultCode = searchParams.get(SearchParamsKeys.promocode) ?? '';

  const [defaultCodePart1, defaultCodePart2, defaultCodePart3] = splitString({
    string: defaultCode,
    parts: 3,
  });

  useEffect(() => {
    setValue('codePart1', defaultCodePart1);
    setValue('codePart2', defaultCodePart2);
    setValue('codePart3', defaultCodePart3);
  }, [defaultCodePart1, defaultCodePart2, defaultCodePart3, setValue]);

  const inputMaxLength = generalSettings.regCodeLength / 3;

  const disabledBtn = !acceptedTerms || !isFullRegCode || isLoading;

  const startRegisterCode = () => {
    setError(null);
    setIsLoading(true);
  };

  const registerCode = async ({
    code,
    csrfTokenName,
    csrfToken,
  }: {
    code: string;
    csrfTokenName: string;
    csrfToken: string;
  }) => {
    try {
      startRegisterCode();
      const response = await codesService.register({
        code,
        [csrfTokenName]: csrfToken,
      });

      const isError = response.result !== 'ok';

      if (isError) {
        throw new Error(JSON.stringify(response));
      }

      const { codeModel, action } = response;

      if (codeModel) {
        updatePromotion(action);
        onSuccessRegisterCode(codeModel.id);
      }
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

  const handleFormSubmit: SubmitHandler<IRegCodeFormData> = async (data) => {
    const validCodePart1 = data.codePart1.toUpperCase();
    const validCodePart2 = data.codePart2.toUpperCase();
    const validCodePart3 = data.codePart3.toUpperCase();

    const code = [validCodePart1, validCodePart2, validCodePart3].join('');

    registerCode({ code, csrfToken, csrfTokenName });
  };

  useEffect(() => {
    if (defaultCode.length === 12) {
      setIsFullRegCode(true);
    }
  }, [defaultCode]);

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
    disabledBtn,
  };
};

export default useRegisterCodeForm;
