import { FC } from 'react';
import { usePromotionsList } from '@/hooks';
import { getPromotionDate, getPromotionBannerUrls } from '@/utils';
import LinkWithQuery from '@/components/LinkWithQuery';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
import PromotionName from '@/components/PromotionName';
import { IProps } from './PromotionsList.types';
import { Card, Container, List, ListItem } from './PromotionsList.styled';

const PromotionsList: FC<IProps> = ({ promotionCategory }) => {
  const { promotions, linkState } = usePromotionsList(promotionCategory);

  return (
    <Container>
      <List>
        {promotions.map(
          ({
            id,
            name,
            date_from: dateFrom,
            date_to: dateTo,
            main_banner_dt: mainBannerDt,
            main_banner_mob: mainBannerMob,
          }) => {
            const date = getPromotionDate({ dateFrom, dateTo });
            const { mainBannerDtUrl, mainBannerMobUrl } =
              getPromotionBannerUrls({ mainBannerDt, mainBannerMob });

            return (
              <ListItem key={id}>
                <LinkWithQuery to={`${id}`} state={linkState}>
                  <Card
                    mainBannerDt={mainBannerDtUrl}
                    mainBannerMob={mainBannerMobUrl}
                  >
                    <PromotionPeriodLabel period={date} />
                    <PromotionName name={name} />
                  </Card>
                </LinkWithQuery>
              </ListItem>
            );
          }
        )}
      </List>
    </Container>
  );
};

export default PromotionsList;
