import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem } from './LocationList.styled';
import { IProps } from './LocationList.types';
import { AnchorClickEvent } from '@/types/types';
import { useSetSearchParams } from '@/hooks';
import { SearchParamsKeys } from '@/constants';

const LocationList: FC<IProps> = ({ setLocation, locations }) => {
  const { searchParams } = useSetSearchParams();
  const locationSearchQuery = searchParams.get(SearchParamsKeys.location);

  const filteredLocations = useMemo(
    () =>
      locationSearchQuery
        ? locations.filter((item) =>
            item.toLowerCase().startsWith(locationSearchQuery.toLowerCase())
          )
        : locations,
    [locationSearchQuery, locations]
  );

  const onLocationClick = (e: AnchorClickEvent) => {
    setLocation(e.currentTarget.text);
  };

  return (
    // TODO: відредагувати логіку зміни локації
    <List>
      {filteredLocations.map((item) => (
        <ListItem key={item}>
          <Link to={`/#${item}`} onClick={onLocationClick}>
            {item}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default LocationList;
