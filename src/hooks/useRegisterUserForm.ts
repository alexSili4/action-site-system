import { IUseRegisterUserForm } from '@/types/hooks.types';
import { IRegUserFormData } from '@/types/regCode.types';
import { SubmitHandler, useForm } from 'react-hook-form';

const useRegisterUserForm = (): IUseRegisterUserForm => {
  const { register, handleSubmit } = useForm<IRegUserFormData>();

  const handleFormSubmit: SubmitHandler<IRegUserFormData> = async (data) => {
    console.log(data);
  };

  return {
    handleFormSubmit,
    register,
    handleSubmit,
  };
};

export default useRegisterUserForm;
