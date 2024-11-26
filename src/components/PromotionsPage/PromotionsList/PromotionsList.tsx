import { FC } from 'react';
import { usePromotionsList } from '@/hooks';
import {
  getPromotionDate,
  getPromotionBannerUrls,
  getPromotionDetailsPath,
} from '@/utils';
import { IProps } from './PromotionsList.types';
import { Card, Container, List, ListItem } from './PromotionsList.styled';
// components
import LinkWithQuery from '@GeneralComponents/LinkWithQuery';
import PromotionPeriodLabel from '@GeneralComponents/PromotionPeriodLabel';
import PromotionName from '@GeneralComponents/PromotionName';

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
            const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
              bannerDt: mainBannerDt,
              bannerMob: mainBannerMob,
            });
            const promotionDetailsPath = getPromotionDetailsPath(id);

            return (
              <ListItem key={id}>
                <LinkWithQuery to={promotionDetailsPath} state={linkState}>
                  <Card mainBannerDt={bannerDtUrl} mainBannerMob={bannerMobUrl}>
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
