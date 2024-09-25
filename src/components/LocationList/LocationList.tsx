import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, LinkPart } from './LocationList.styled';
import { IProps } from './LocationList.types';
import { AnchorClickEvent } from '@/types/types';
import { PagePaths, SearchParamsKeys } from '@/constants';
import { useSetSearchParams } from '@/hooks';

const LocationList: FC<IProps> = ({ setLocation, locations }) => {
  const { searchParams } = useSetSearchParams();
  const search = searchParams.get(SearchParamsKeys.search) ?? '';

  const filteredLocations = useMemo(
    () =>
      search
        ? locations.filter((item) =>
            item.toLowerCase().startsWith(search.toLowerCase())
          )
        : locations,
    [search, locations]
  );

  const onLocationClick = (e: AnchorClickEvent) => {
    setLocation(e.currentTarget.text);
  };

  return (
    // TODO: відредагувати логіку зміни локації
    <List>
      {filteredLocations.map((item) => {
        const accentPart = item.slice(0, search.length);
        const otherPart = item.slice(search.length);

        const path = `${PagePaths.promotions}#${item}`;

        return (
          <ListItem key={item}>
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
