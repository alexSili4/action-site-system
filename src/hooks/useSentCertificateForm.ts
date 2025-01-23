import codesService from '@/services/codes.service';
import {
  IUseSentCertificateForm,
  IUseSentCertificateFormProps,
} from '@/types/hooks.types';
import { ISentCertificateFormData } from '@/types/regCode.types';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useCsrfToken from './useCsrfToken';
import useServiceUnavailablePageNavigate from './useServiceUnavailablePageNavigate';
import { getCodeStatus } from '@/utils';
import { AxiosError } from 'axios';

const useSentCertificateForm = ({
  userName,
  userEmail,
  codeId,
  toggleShowSuccessMsgState,
  updateUserData,
  updateIsSuccessStatus,
}: IUseSentCertificateFormProps): IUseSentCertificateForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disabledBtn, setDisabledBtn] = useState<boolean>(false);
  const { name: tokenName, token } = useCsrfToken();
  const { register, handleSubmit, watch, setValue } =
    useForm<ISentCertificateFormData>();
  const nameLength = watch('name')?.length;
  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    const validUserName = userName ?? '';
    const validUserEmail = userEmail ?? '';

    setValue('name', validUserName);
    setValue('email', validUserEmail);
  }, [setValue, userEmail, userName]);

  useEffect(() => {
    if (isLoading || !nameLength) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [isLoading, nameLength]);

  useEffect(() => {
    const getUserName = async (codeId: number): Promise<void> => {
      try {
        const response = await codesService.getUserData(codeId);
        updateUserData(response);
      } catch (error) {
        let errorMessage: string = '';

        if (error instanceof AxiosError) {
          errorMessage = error.response?.data.message;
        }

        navigate({ isError: true, errorMessage });
      }
    };

    getUserName(codeId);
  }, [codeId]);

  const handleFormSubmit: SubmitHandler<ISentCertificateFormData> = async ({
    email,
    name,
    sendCertificate,
  }) => {
    const userData = {
      codeId,
      email,
      name,
      send_to_email_status: sendCertificate,
      [tokenName]: token,
    };

    try {
      setIsLoading(true);

      const response = await codesService.updateUserData(userData);
      const { isSuccessStatus } = getCodeStatus(response.code.status);

      updateIsSuccessStatus(isSuccessStatus);
      updateUserData(response);
      toggleShowSuccessMsgState();
    } catch (error) {
      // TODO handle error
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
    disabledBtn,
  };
};

export default useSentCertificateForm;
