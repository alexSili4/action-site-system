import { FC } from 'react';
import { Container } from './LocationFilter.styled';
import { IProps } from './LocationFilter.types';

const LocationFilter: FC<IProps> = ({ isRootPage, isHidden = false }) => {
  return (
    <Container isRootPage={isRootPage} isHidden={isHidden}>
      LocationFilter
    </Container>
  );
};

export default LocationFilter;
