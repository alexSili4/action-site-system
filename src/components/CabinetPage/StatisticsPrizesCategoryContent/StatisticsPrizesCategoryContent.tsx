import { FC } from 'react';
import {
  Container,
  List,
  ListItem,
} from './StatisticsPrizesCategoryContent.styled';
import {
  formatDate,
  getFileUrl,
  getPrizeDetailsPath,
  getCertificateDetailsPath,
} from '@/utils';
import { useUserPrizesStore } from '@/store/store';
import {
  selectTotalPages,
  selectUserPrizes,
} from '@/store/userPrizes/selectors';
import { DateFormats, Messages } from '@/constants';
import prize from '@/images/cabinet/prize-min.png';
// components
import PaginationBar from '@GeneralComponents/PaginationBar';
import StatisticsPrize from '@CabinetPageComponents/StatisticsPrize';
import EmptyPrizesListMessage from '@CabinetPageComponents/EmptyPrizesListMessage';

const StatisticsPrizesCategoryContent: FC = () => {
  const userPrizes = useUserPrizesStore(selectUserPrizes);
  const totalPages = useUserPrizesStore(selectTotalPages);
  const isManyPages = totalPages > 1;
  const isPrizesLength = Boolean(userPrizes.length);
  const shouldShowPaginationBar = isPrizesLength && isManyPages;
  const shouldShowUserPrizes = Boolean(userPrizes.length);

  return (
    <Container>
      {shouldShowUserPrizes ? (
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
              const prizeDetailsPath = getPrizeDetailsPath(winnerId);
              const certificateDetailsPath =
                getCertificateDetailsPath(winnerId);

              const isCertificate = entityType === 'wheel';
              const linkPath = isCertificate
                ? certificateDetailsPath
                : prizeDetailsPath;

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
      ) : (
        <EmptyPrizesListMessage
          bgImg={prize}
          title={Messages.emptyUserPrizesList}
          isBigImgSize
        />
      )}
      {shouldShowPaginationBar && <PaginationBar totalPages={totalPages} />}
    </Container>
  );
};

export default StatisticsPrizesCategoryContent;
