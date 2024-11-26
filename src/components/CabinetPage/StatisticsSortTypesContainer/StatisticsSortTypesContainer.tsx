import { FC } from 'react';
import { Container } from './StatisticsSortTypesContainer.styled';
import { IProps } from './StatisticsSortTypesContainer.types';
// components
import ChangeSortTypeBtn from '@CabinetPageComponents/ChangeSortTypeBtn';
import StatisticsSortTypesDropdown from '@CabinetPageComponents/StatisticsSortTypesDropdown';

const StatisticsSortTypesContainer: FC<IProps> = ({
  isAscSortType,
  onSortBtnClick,
  onSortTypeInputChange,
  showSortTypesList,
  toggleShowSortTypesList,
  onShowSortTypesBtnClick,
  sortType,
}) => {
  return (
    <Container>
      <ChangeSortTypeBtn
        isAscSortType={isAscSortType}
        onClick={onSortBtnClick}
      />
      <StatisticsSortTypesDropdown
        onShowSortTypesBtnClick={onShowSortTypesBtnClick}
        toggleShowSortTypesList={toggleShowSortTypesList}
        showSortTypesList={showSortTypesList}
        onSortTypeInputChange={onSortTypeInputChange}
        sortType={sortType}
      />
    </Container>
  );
};

export default StatisticsSortTypesContainer;
