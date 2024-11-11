import { theme } from '@/constants';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IProps } from './RegisterFormCheckbox.types';
import {
  BasicCheckbox,
  Container,
  CustomCheckbox,
} from './RegisterFormCheckbox.styled';

const RegisterFormCheckbox: FC<IProps> = ({ children, settings }) => {
  return (
    <Container>
      <BasicCheckbox type='checkbox' {...settings} />
      <CustomCheckbox>
        <FaCheck size={theme.iconSizes.registerUserFormCheckbox} />
      </CustomCheckbox>
      {children}
    </Container>
  );
};

export default RegisterFormCheckbox;
