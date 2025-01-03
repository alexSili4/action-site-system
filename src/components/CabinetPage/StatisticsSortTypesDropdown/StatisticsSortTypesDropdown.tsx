import { FC } from 'react';
import {
  Container,
  Content,
  ShowSortTypesBtn,
  BtnTitle,
} from './StatisticsSortTypesDropdown.styled';
import { FaChevronDown } from 'react-icons/fa';
import { IProps } from './StatisticsSortTypesDropdown.types';
import { getTranslatedStatisticsSortType } from '@/utils';
import { StatisticsSortTypesKeys, theme } from '@/constants';
// components
import DropdownBackdrop from '@GeneralComponents/DropdownBackdrop';
import SmoothFadeInDropdownList from '@AnimationBlocks/SmoothFadeInDropdownList';
import StatisticsSortTypesList from '@CabinetPageComponents/StatisticsSortTypesList';

const StatisticsSortTypesDropdown: FC<IProps> = ({
  onSortTypeInputChange,
  showSortTypesList,
  toggleShowSortTypesList,
  onShowSortTypesBtnClick,
  sortType,
}) => {
  const sortTypes = Object.values(StatisticsSortTypesKeys);
  const btnTitle = getTranslatedStatisticsSortType(sortType);

  return (
    <Container>
      {showSortTypesList && (
        <DropdownBackdrop onClick={toggleShowSortTypesList} />
      )}
      <Content>
        <ShowSortTypesBtn
          type='button'
          onClick={onShowSortTypesBtnClick}
          showSortTypesList={showSortTypesList}
        >
          <BtnTitle showSortTypesList={showSortTypesList}>{btnTitle}</BtnTitle>
          <FaChevronDown size={theme.iconSizes.showPromotionsSortTypesBtn} />
        </ShowSortTypesBtn>
        <SmoothFadeInDropdownList isVisible={showSortTypesList}>
          <StatisticsSortTypesList
            types={sortTypes}
            sortType={sortType}
            onSortTypeInputChange={onSortTypeInputChange}
          />
        </SmoothFadeInDropdownList>
      </Content>
    </Container>
  );
};

export default StatisticsSortTypesDropdown;
