import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './StatisticsPrizesCategoryContent.styled';
import PaginationBar from '@GeneralComponents/PaginationBar';
import StatisticsPrize from '@CabinetPageComponents/StatisticsPrize';
import { formatDate, getFileUrl } from '@/utils';
import { useUserPrizesStore } from '@/store/store';
import {
  selectTotalPages,
  selectUserPrizes,
} from '@/store/userPrizes/selectors';
import { DateFormats } from '@/constants';

const StatisticsPrizesCategoryContent: FC = () => {
  const userPrizes = useUserPrizesStore(selectUserPrizes);
  const totalPages = useUserPrizesStore(selectTotalPages);
  const isManyPages = totalPages > 1;
  const isPrizesLength = Boolean(userPrizes.length);
  const shouldShowPaginationBar = isPrizesLength && isManyPages;

  return (
    <Container>
      <List>
        {userPrizes.map(
          (
            {
              code,
              gift_name: giftName,
              gift_images: giftImages,
              gift_get_conditions: giftGetConditions,
              win_time: winTime,
            },
            index
          ) => {
            const prizeImgUrl = getFileUrl(giftImages[0]);
            const drawDate = formatDate({
              date: winTime * 1000,
              dateFormat: DateFormats.generalDate,
            });

            return (
              <ListItem key={index}>
                <StatisticsPrize
                  code={code}
                  name={giftName}
                  prizeImg={prizeImgUrl}
                  conditions={giftGetConditions}
                  drawDate={drawDate}
                />
              </ListItem>
            );
          }
        )}
      </List>
      {shouldShowPaginationBar && <PaginationBar totalPages={totalPages} />}
    </Container>
  );
};

export default StatisticsPrizesCategoryContent;
