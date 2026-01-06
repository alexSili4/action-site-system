import { FC, MouseEventHandler } from 'react';
import { Container, Title } from './CabinetHeader.styled';
import EditUserBtn from '@CabinetPageComponents/EditUserBtn';

const CabinetHeader: FC<{
  isEdit: boolean;
  isSubmitting: boolean;
  onEditBtnClick: MouseEventHandler;
  title: string;
  editBtnLabel: string;
  allFieldsFilled?: boolean;
}> = ({
  onEditBtnClick,
  title,
  isSubmitting,
  editBtnLabel,
  isEdit,
  allFieldsFilled,
}) => {
  return (
    <Container>
      <Title>{title}</Title>

      {!allFieldsFilled && (
        <EditUserBtn
          onClick={onEditBtnClick}
          disabled={isSubmitting}
          label={editBtnLabel}
          showIcon={!isEdit}
        />
      )}
    </Container>
  );
};

export default CabinetHeader;
