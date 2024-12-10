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

const useSentCertificateForm = ({
  userName,
  codeId,
  toggleShowSuccessMsgState,
  updateUserName,
}: IUseSentCertificateFormProps): IUseSentCertificateForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { name: tokenName, token } = useCsrfToken();
  const defaultUserName = userName ?? '';
  const { register, handleSubmit, watch } = useForm<ISentCertificateFormData>();
  const nameLength = watch('name')?.length;
  const isUserName = Boolean(userName);
  const isValidUserName = userName ? true : Boolean(nameLength);
  const disabledBtn = isLoading || !isValidUserName;
  const navigate = useServiceUnavailablePageNavigate();

  useEffect(() => {
    console.log('defaultUserName ', defaultUserName);
  }, [defaultUserName]);

  useEffect(() => {
    const getUserName = async (codeId: number): Promise<void> => {
      try {
        const { name } = await codesService.getUserData(codeId);
        updateUserName(name);
      } catch (error) {
        navigate();
      }
    };

    getUserName(codeId);
  }, [codeId, updateUserName]);

  const handleFormSubmit: SubmitHandler<ISentCertificateFormData> = async ({
    email,
    name,
    sendCertificate,
  }) => {
    const userName = isUserName ? defaultUserName : name;
    const userData = {
      codeId,
      email,
      name: userName,
      send_to_email_status: sendCertificate,
      [tokenName]: token,
    };

    try {
      setIsLoading(true);

      const { name } = await codesService.updateUserData(userData);
      updateUserName(name);
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
    isUserName,
    defaultUserName,
  };
};

export default useSentCertificateForm;
