import { FC } from 'react';
import { Button } from './ChangeSortTypeBtn.styled';
import { TbArrowsUpDown, TbArrowsDownUp } from 'react-icons/tb';
import { IProps } from './ChangeSortTypeBtn.types';
import { theme } from '@/constants';

const ChangeSortTypeBtn: FC<IProps> = ({ isAscSortType, onClick }) => {
  const icon = isAscSortType ? (
    <TbArrowsUpDown size={theme.iconSizes.statisticsSortBtn} />
  ) : (
    <TbArrowsDownUp size={theme.iconSizes.statisticsSortBtn} />
  );

  return (
    <Button type='button' onClick={onClick}>
      {icon}
    </Button>
  );
};

export default ChangeSortTypeBtn;
