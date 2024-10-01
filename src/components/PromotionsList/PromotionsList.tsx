import { FC } from 'react';
import { Card, Container, List, ListItem } from './PromotionsList.styled';
import LinkWithQuery from '@/components/LinkWithQuery';
import { useLocation } from 'react-router-dom';
import { IProps } from './PromotionsList.types';
import { IPromotionDetailsState } from '@/types/types';
import PromotionPeriodLabel from '@/components/PromotionPeriodLabel';
// import { useSetSearchParams } from '@/hooks';
// import { SearchParamsKeys } from '@/constants';
// import { useCitiesStore } from '@/store/store';
// import { selectCities } from '@/store/cities/selectors';

const PromotionsList: FC<IProps> = ({ promotionCategory }) => {
  // TODO delete promotions
  const promotions: { id: number; date: string }[] = [
    { date: '08.08.24 - 25.09.24', id: 1 },
    { date: '08.08.24 - 25.09.24', id: 2 },
    { date: '08.08.24 - 25.09.24', id: 3 },
  ];
  // const { searchParams } = useSetSearchParams();
  // const city = searchParams.get(SearchParamsKeys.city);
  // const cities = useCitiesStore(selectCities);

  const location = useLocation();

  const linkState: IPromotionDetailsState = {
    from: location,
    promotionCategory,
  };

  return (
    // TODO delete cityId from markup
    <Container>
      {/* <p>cityId: {cityId}</p> */}
      <List>
        {promotions.map(({ id, date }) => (
          <ListItem key={id}>
            <LinkWithQuery to={`${id}`} state={linkState}>
              <Card>
                <PromotionPeriodLabel period={date} />
              </Card>
            </LinkWithQuery>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PromotionsList;
