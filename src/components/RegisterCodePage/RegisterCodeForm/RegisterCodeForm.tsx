import { FC } from 'react';
import { IProps } from './RegisterCodeForm.types';

const RegisterCodeForm: FC<IProps> = ({ incrementCurrentStep }) => {
  console.log(incrementCurrentStep);

  return <div>RegisterCodeForm</div>;
};

export default RegisterCodeForm;
