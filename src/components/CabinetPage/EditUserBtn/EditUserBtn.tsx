import { FC, MouseEventHandler } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { EditBtn } from './EditUserBtn.styled';

const EditUserBtn: FC<{
  onClick: MouseEventHandler;
  disabled: boolean;
  showIcon: boolean;
  label: string;
}> = ({ onClick, disabled, showIcon, label }) => {
  return (
    <EditBtn type='button' onClick={onClick} disabled={disabled}>
      {showIcon && <RiEdit2Line size={16} />}
      <span>{label}</span>
    </EditBtn>
  );
};

export default EditUserBtn;
