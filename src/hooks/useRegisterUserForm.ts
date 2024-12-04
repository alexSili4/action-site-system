import { IUseRegisterUserForm } from '@/types/hooks.types';
import { IRegUserFormData } from '@/types/regCode.types';
import { Func } from '@/types/types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useRegisterUserForm = (
  toggleShowSuccessMsgState: Func
): IUseRegisterUserForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<IRegUserFormData>();
  const nameLength = watch('name')?.length;
  const isUserName = Boolean(nameLength);
  const disabledBtn = isLoading || !isUserName;

  const handleFormSubmit: SubmitHandler<IRegUserFormData> = async (data) => {
    setIsLoading(true);

    console.log(data);

    setIsLoading(false);
    toggleShowSuccessMsgState();
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
    disabledBtn,
  };
};

export default useRegisterUserForm;
