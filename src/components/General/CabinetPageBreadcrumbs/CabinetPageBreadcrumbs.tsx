import { FC } from 'react';
import { PagePaths } from '@/constants';
import {
  Container,
  DecorativeSymbol,
  StyledPageLink,
  StyledRootPageLink,
  StyledPageTitle,
} from './CabinetPageBreadcrumbs.styled';
import { IProps } from './CabinetPageBreadcrumbs.types';

const CabinetPageBreadcrumbs: FC<IProps> = ({ addPageTitle }) => {
  return (
    <Container>
      <StyledRootPageLink to={PagePaths.root}>Головна</StyledRootPageLink>
      <DecorativeSymbol>/</DecorativeSymbol>
      <StyledPageLink to={PagePaths.cabinet}>Особистий кабінет</StyledPageLink>
      {addPageTitle && (
        <>
          <DecorativeSymbol>/</DecorativeSymbol>
          <StyledPageTitle>{addPageTitle}</StyledPageTitle>
        </>
      )}
    </Container>
  );
};

export default CabinetPageBreadcrumbs;
