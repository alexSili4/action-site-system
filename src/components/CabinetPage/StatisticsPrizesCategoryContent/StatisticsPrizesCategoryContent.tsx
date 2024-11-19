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
import { DateFormats, PagePaths } from '@/constants';

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
              winner_id: winnerId,
              entity_type: entityType,
            },
            index
          ) => {
            const prizeImgUrl = getFileUrl(giftImages[0]);
            const drawDate = formatDate({
              date: winTime * 1000,
              dateFormat: DateFormats.generalDate,
            });
            const userPrizePath = `${PagePaths.userPrize}/${winnerId}`;
            const userCertificatePath = `${PagePaths.userCertificate}/${winnerId}`;

            const isCertificate = entityType === 'wheel';
            const linkPath = isCertificate
              ? userCertificatePath
              : userPrizePath;

            return (
              <ListItem key={index}>
                <StatisticsPrize
                  code={code}
                  name={giftName}
                  prizeImg={prizeImgUrl}
                  conditions={giftGetConditions}
                  drawDate={drawDate}
                  linkPath={linkPath}
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
