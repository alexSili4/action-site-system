import { FC } from 'react';
import { IProps } from './Input.types';
import { StyledInput } from './Input.styled';

const Input: FC<IProps> = ({
  settings,
  defaultValue = '',
  maxLength,
  onChange,
}) => {
  return (
    <StyledInput
      type='text'
      defaultValue={defaultValue}
      maxLength={maxLength}
      {...settings}
      onChange={onChange}
    />
  );
};

export default Input;
