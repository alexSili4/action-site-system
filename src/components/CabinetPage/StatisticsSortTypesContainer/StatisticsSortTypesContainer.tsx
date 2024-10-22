import { FC } from 'react';
import { Container } from './StatisticsSortTypesContainer.styled';
import ChangeSortTypeBtn from '@CabinetPageComponents/ChangeSortTypeBtn';
import { IProps } from './StatisticsSortTypesContainer.types';
import StatisticsSortTypesDropdown from '@CabinetPageComponents/StatisticsSortTypesDropdown';

const StatisticsSortTypesContainer: FC<IProps> = ({
  isAscSortType,
  onSortBtnClick,
}) => {
  return (
    <Container>
      <ChangeSortTypeBtn
        isAscSortType={isAscSortType}
        onClick={onSortBtnClick}
      />
      <StatisticsSortTypesDropdown />
    </Container>
  );
};

export default StatisticsSortTypesContainer;
