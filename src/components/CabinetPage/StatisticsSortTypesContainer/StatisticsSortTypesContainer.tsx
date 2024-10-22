import { FC } from 'react';
import { Container } from './StatisticsSortTypesContainer.styled';
import ChangeSortTypeBtn from '@CabinetPageComponents/ChangeSortTypeBtn';
import { IProps } from './StatisticsSortTypesContainer.types';
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
