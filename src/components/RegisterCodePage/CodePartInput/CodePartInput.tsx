import { FC } from 'react';
import { IProps } from './CodePartInput.types';
import { StyledInput } from './CodePartInput.styled';

const CodePartInput: FC<IProps> = ({
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

export default CodePartInput;
