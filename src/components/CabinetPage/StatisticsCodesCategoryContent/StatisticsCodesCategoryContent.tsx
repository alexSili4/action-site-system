import { FC } from 'react';
import { List, ListItem } from './StatisticsCodesCategoryContent.styled';
import StatisticsCode from '@CabinetPageComponents/StatisticsCode';
import { useUserCodesStore } from '@/store/store';
import { selectUserCodes } from '@/store/userCodes/selectors';

const StatisticsCodesCategoryContent: FC = () => {
  const userCodes = useUserCodesStore(selectUserCodes);

  return (
    <List>
      {userCodes.map(({ code }) => (
        <ListItem key={code}>
          <StatisticsCode />
        </ListItem>
      ))}
    </List>
  );
};

export default StatisticsCodesCategoryContent;
