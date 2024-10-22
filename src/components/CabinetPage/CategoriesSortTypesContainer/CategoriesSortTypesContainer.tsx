import { FC } from 'react';
import { Container } from './CategoriesSortTypesContainer.styled';
import ChangeSortTypeBtn from '@CabinetPageComponents/ChangeSortTypeBtn';
import { IProps } from './CategoriesSortTypesContainer.types';

const CategoriesSortTypesContainer: FC<IProps> = ({
  isAscSortType,
  onSortBtnClick,
}) => {
  return (
    <Container>
      <ChangeSortTypeBtn
        isAscSortType={isAscSortType}
        onClick={onSortBtnClick}
      />
    </Container>
  );
};

export default CategoriesSortTypesContainer;
