import { FC } from 'react';
import { Container } from './StatisticsFilter.styled';
import StatisticsCategories from '@CabinetPageComponents/StatisticsCategories';
import { IProps } from './StatisticsFilter.types';
import StatisticsSortTypesContainer from '@CabinetPageComponents/StatisticsSortTypesContainer';

const StatisticsFilter: FC<IProps> = ({
  categories,
  changeStatisticCategory,
  statisticCategory,
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
      <StatisticsCategories
        changeStatisticCategory={changeStatisticCategory}
        categories={categories}
        statisticCategory={statisticCategory}
      />
      <StatisticsSortTypesContainer
        isAscSortType={isAscSortType}
        onSortBtnClick={onSortBtnClick}
        onSortTypeInputChange={onSortTypeInputChange}
        showSortTypesList={showSortTypesList}
        toggleShowSortTypesList={toggleShowSortTypesList}
        onShowSortTypesBtnClick={onShowSortTypesBtnClick}
        sortType={sortType}
      />
    </Container>
  );
};

export default StatisticsFilter;
