import { FC } from 'react';
import { usePromotionsList } from '@/hooks';
import { getPromotionBannerUrls, getPromotionDetailsPath } from '@/utils';
import { IProps } from './PromotionsList.types';
import { Card, Container, List, ListItem } from './PromotionsList.styled';
// components
import LinkWithQuery from '@GeneralComponents/LinkWithQuery';

const PromotionsList: FC<IProps> = ({ promotionCategory }) => {
  const { promotions, promotionDetailsState } =
    usePromotionsList(promotionCategory);

  return (
    <Container>
      <List>
        {promotions.map(
          ({
            id,
            main_banner_dt: mainBannerDt,
            main_banner_mob: mainBannerMob,
          }) => {
            const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
              bannerDt: mainBannerDt,
              bannerMob: mainBannerMob,
            });
            const promotionDetailsPath = getPromotionDetailsPath(id);

            return (
              <ListItem key={id}>
                <LinkWithQuery
                  to={promotionDetailsPath}
                  state={promotionDetailsState}
                >
                  <Card
                    mainBannerDt={bannerDtUrl}
                    mainBannerMob={bannerMobUrl}
                  ></Card>
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
