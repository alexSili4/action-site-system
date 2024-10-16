import { FC } from 'react';
import { StyledBtn } from './SubmitRegFormBtn.styled';
import { IProps } from './SubmitRegFormBtn.types';

const SubmitRegFormBtn: FC<IProps> = ({ title, disabled }) => {
  return (
    <StyledBtn type='submit' disabled={disabled}>
      {title}
    </StyledBtn>
  );
};

export default SubmitRegFormBtn;
