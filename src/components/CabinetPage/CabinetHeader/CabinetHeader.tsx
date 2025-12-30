import { FC, MouseEventHandler } from 'react';
import { Container, Title } from './CabinetHeader.styled';
import EditUserBtn from '@CabinetPageComponents/EditUserBtn';

const CabinetHeader: FC<{
  isEdit: boolean;
  isSubmitting: boolean;
  onEditBtnClick: MouseEventHandler;
  title: string;
  editBtnLabel: string;
}> = ({ onEditBtnClick, title, isSubmitting, editBtnLabel, isEdit }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <EditUserBtn
        onClick={onEditBtnClick}
        disabled={isSubmitting}
        label={editBtnLabel}
        showIcon={!isEdit}
      />
    </Container>
  );
};

export default CabinetHeader;
