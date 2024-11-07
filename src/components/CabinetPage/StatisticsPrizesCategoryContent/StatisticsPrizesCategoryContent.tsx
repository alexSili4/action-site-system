import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './StatisticsPrizesCategoryContent.styled';
import PaginationBar from '@GeneralComponents/PaginationBar';
import StatisticsPrize from '@CabinetPageComponents/StatisticsPrize';

const StatisticsPrizesCategoryContent: FC = () => {
  // TODO fix
  const userPrizes = [{}, {}, {}];
  const totalPages = 10;
  const shouldShowPaginationBar = Boolean(userPrizes.length);

  return (
    <Container>
      <List>
        {userPrizes.map((_, index) => (
          <ListItem key={index}>
            <StatisticsPrize />
          </ListItem>
        ))}
      </List>
      {shouldShowPaginationBar && <PaginationBar totalPages={totalPages} />}
    </Container>
  );
};

export default StatisticsPrizesCategoryContent;
