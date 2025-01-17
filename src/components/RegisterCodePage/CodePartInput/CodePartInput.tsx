import { FC } from 'react';
import { IProps } from './CodePartInput.types';
import { StyledInput } from './CodePartInput.styled';

const CodePartInput: FC<IProps> = ({
  settings,
  defaultValue = '',
  maxLength,
  onChange,
  placeholder,
}) => {
  return (
    <StyledInput
      type='text'
      defaultValue={defaultValue}
      maxLength={maxLength}
      {...settings}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete='off'
    />
  );
};

export default CodePartInput;
