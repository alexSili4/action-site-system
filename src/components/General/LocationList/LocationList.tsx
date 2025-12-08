import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  List,
  ListItem,
  LinkPart,
  LinkTitleWrap,
  Container,
} from './LocationList.styled';
import { PagePaths, SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { useAuthStore, useCitiesStore } from '@/store/store';
import { selectCities } from '@/store/cities/selectors';
import { IProps } from './LocationList.types';
import { ga, getSortedCities } from '@/utils';
import { selectUser } from '@/store/auth/selectors';

const LocationList: FC<IProps> = ({ onLocationLinkClick }) => {
  const cities = useCitiesStore(selectCities);
  const user = useAuthStore(selectUser);
  const sortedCities = getSortedCities(cities);
  const { searchParams } = useSetSearchParams();
  const location = useLocation();
  const search = searchParams.get(SearchParamsKeys.search) ?? '';

  // Отримуємо поточний cityId з URL
  const currentCityId = new URLSearchParams(location.search).get(
    SearchParamsKeys.cityId
  );

  const filteredLocations = useMemo(
    () =>
      search
        ? sortedCities.filter(({ name }) =>
            name.toLowerCase().startsWith(search.toLowerCase())
          )
        : sortedCities,
    [search, sortedCities]
  );

  return (
    <Container>
      <List>
        {filteredLocations.map(({ name, id }) => {
          const accentPart = name.slice(0, search.length);
          const otherPart = name.slice(search.length);

          const path = `${PagePaths.promotions}?${SearchParamsKeys.cityId}=${id}`;

          return (
            <ListItem key={id}>
              <Link
                to={path}
                onClick={(e) => {
                  e.currentTarget.blur();

                  onLocationLinkClick();

                  // Викликаємо GA подію тільки якщо відбувається реальна навігація
                  if (String(id) !== currentCityId) {
                    ga.citySelected({
                      cityId: id,
                      cityName: name,
                      userId: user.id,
                    });
                  }
                }}
              >
                <LinkTitleWrap>
                  <LinkPart isTitle>{accentPart}</LinkPart>
                  <LinkPart isTitle={!accentPart}>{otherPart}</LinkPart>
                </LinkTitleWrap>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default LocationList;
