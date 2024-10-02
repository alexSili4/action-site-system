import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, LinkPart } from './LocationList.styled';
import { IProps } from './LocationList.types';
import { AnchorClickEvent } from '@/types/types';
import { PagePaths, SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';
import { useCitiesStore } from '@/store/store';
import { selectCities } from '@/store/cities/selectors';

const LocationList: FC<IProps> = ({ setLocation }) => {
  const cities = useCitiesStore(selectCities);
  const { searchParams } = useSetSearchParams();
  const search = searchParams.get(SearchParamsKeys.search) ?? '';

  const filteredLocations = useMemo(
    () =>
      search
        ? cities.filter(({ name }) =>
            name.toLowerCase().startsWith(search.toLowerCase())
          )
        : cities,
    [search, cities]
  );

  const onLocationClick = (e: AnchorClickEvent) => {
    setLocation(e.currentTarget.text);
  };

  return (
    // TODO: відредагувати логіку зміни локації
    <List>
      {filteredLocations.map(({ name, id }) => {
        const accentPart = name.slice(0, search.length);
        const otherPart = name.slice(search.length);

        const path = `${PagePaths.promotions}?${SearchParamsKeys.cityId}=${id}`;

        return (
          <ListItem key={id}>
            <Link to={path} onClick={onLocationClick}>
              <LinkPart isTitle>{accentPart}</LinkPart>
              <LinkPart isTitle={!accentPart}>{otherPart}</LinkPart>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default LocationList;
