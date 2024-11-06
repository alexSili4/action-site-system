import { IUseRegisterUserForm } from '@/types/hooks.types';
import { IRegUserFormData } from '@/types/regCode.types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const useRegisterUserForm = (): IUseRegisterUserForm => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<IRegUserFormData>();
  const nameLength = watch('name')?.length;
  const disabledBtn = isLoading && Boolean(nameLength);

  const handleFormSubmit: SubmitHandler<IRegUserFormData> = async (data) => {
    setIsLoading(true);

    console.log(data);

    setIsLoading(false);
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
    disabledBtn,
  };
};

export default useRegisterUserForm;
