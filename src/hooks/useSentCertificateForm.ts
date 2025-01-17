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
  const [userNameLength, setUserNameLength] = useState<number>(0);
  const { name: tokenName, token } = useCsrfToken();
  const defaultUserName = userName ?? '';
  const defaultUserEmail = userEmail ?? '';
  const { register, handleSubmit, watch } = useForm<ISentCertificateFormData>();
  const nameLength = watch('name')?.length;
  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    if (isLoading || !userNameLength) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [isLoading, userNameLength]);

  useEffect(() => {
    if (userName) {
      setUserNameLength(userName.length);
    }
  }, [userName]);

  useEffect(() => {
    setUserNameLength(nameLength);
  }, [nameLength]);

  useEffect(() => {
    const getUserName = async (codeId: number): Promise<void> => {
      try {
        const response = await codesService.getUserData(codeId);
        updateUserData(response);
      } catch (error) {
        navigate(true);
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
      const { isSuccessStatus } = getCodeStatus(response.code.code_status);

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
    defaultUserEmail,
    defaultUserName,
  };
};

export default useSentCertificateForm;
