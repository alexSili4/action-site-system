import { FC } from 'react';
import { PagePaths } from '@/constants';
import { Link } from 'react-router-dom';
import {
  Container,
  DecorativeSymbol,
  Title,
} from './CabinetPageBreadcrumbs.styled';

const CabinetPageBreadcrumbs: FC = () => {
  return (
    <Container>
      <Link to={PagePaths.root}>Головна</Link>
      <DecorativeSymbol>/</DecorativeSymbol>
      <Title>Особистий кабінет</Title>
    </Container>
  );
};

export default CabinetPageBreadcrumbs;
