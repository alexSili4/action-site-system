import { FC } from 'react';
import { usePromotionsList } from '@/hooks';
import {
  ga,
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
import { useAuthStore } from '@/store/store';
import { selectUser } from '@/store/auth/selectors';

const PromotionsList: FC<IProps> = ({ promotionCategory }) => {
  const user = useAuthStore(selectUser);
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
              name,
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
                    action={() => {
                      ga.promoSelected({
                        promoId: id,
                        promoName: name,
                        userId: user.id,
                      });
                    }}
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
