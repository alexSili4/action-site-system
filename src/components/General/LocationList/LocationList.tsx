import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  LinkPart,
  LinkTitleWrap,
  Container,
} from './LocationList.styled';
import { PagePaths, SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { useCitiesStore } from '@/store/store';
import { selectCities } from '@/store/cities/selectors';
import { IProps } from './LocationList.types';
import { getSortedCities } from '@/utils';

const LocationList: FC<IProps> = ({ onLocationLinkClick }) => {
  const cities = useCitiesStore(selectCities);
  const sortedCities = getSortedCities(cities);
  const { searchParams } = useSetSearchParams();
  const search = searchParams.get(SearchParamsKeys.search) ?? '';

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
              <Link to={path} onClick={onLocationLinkClick}>
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
