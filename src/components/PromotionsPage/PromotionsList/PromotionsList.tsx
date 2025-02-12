import { FC } from 'react';
import { usePromotionsList } from '@/hooks';
import {
  getFinishedPromoLabel,
  getIsFinishedPromotion,
  getPromotionBannerUrls,
  getPromotionDetailsPath,
} from '@/utils';
import { IProps } from './PromotionsList.types';
import { Card, Container, List, ListItem } from './PromotionsList.styled';
// components
import LinkWithQuery from '@GeneralComponents/LinkWithQuery';
import FinishedPromoLabel from '@GeneralComponents/FinishedPromoLabel';

const PromotionsList: FC<IProps> = ({ promotionCategory }) => {
  const { promotions, promotionDetailsState, isTablet, isEmptyList } =
    usePromotionsList(promotionCategory);

  return (
    !isEmptyList && (
      <Container>
        <List>
          {promotions.map(
            ({
              id,
              main_banner_dt: mainBannerDt,
              main_banner_mob: mainBannerMob,
              v_status: vStatus,
            }) => {
              const { bannerDtUrl, bannerMobUrl } = getPromotionBannerUrls({
                bannerDt: mainBannerDt,
                bannerMob: mainBannerMob,
              });
              const promotionDetailsPath = getPromotionDetailsPath(id);
              const isFinishedPromotion = getIsFinishedPromotion(vStatus);
              const finishedPromoLabel = getFinishedPromoLabel(isTablet);

              return (
                <ListItem key={id}>
                  <LinkWithQuery
                    to={promotionDetailsPath}
                    state={promotionDetailsState}
                  >
                    <Card
                      mainBannerDt={bannerDtUrl}
                      mainBannerMob={bannerMobUrl}
                    >
                      {isFinishedPromotion && (
                        <FinishedPromoLabel
                          finishedPromoLabel={finishedPromoLabel}
                        />
                      )}
                    </Card>
                  </LinkWithQuery>
                </ListItem>
              );
            }
          )}
        </List>
      </Container>
    )
  );
};

export default PromotionsList;
