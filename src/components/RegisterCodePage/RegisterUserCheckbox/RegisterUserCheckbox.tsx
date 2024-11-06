import { theme } from '@/constants';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IProps } from './RegisterUserCheckbox.types';
import {
  BasicCheckbox,
  Container,
  CustomCheckbox,
} from './RegisterUserCheckbox.styled';

const RegisterUserCheckbox: FC<IProps> = ({ children, settings }) => {
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

export default RegisterUserCheckbox;
