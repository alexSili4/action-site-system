import { PagePaths, theme } from '@/constants';
import { FC } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import {
  StyledLink,
  Container,
  IconWrap,
  Title,
} from './CabinetGoBackLink.styled';
import { IProps } from './CabinetGoBackLink.types';
import { CabinetState } from '@/types/cabinet.types';
import { useLocation } from 'react-router-dom';

const CabinetGoBackLink: FC<IProps> = ({ isShowOnDesk = false }) => {
  const { state }: CabinetState = useLocation();

  const linkPath = state?.from ?? PagePaths.cabinet;

  return (
    <Container isShowOnDesk={isShowOnDesk}>
      <StyledLink to={linkPath}>
        <IconWrap>
          <FaChevronLeft size={theme.iconSizes.cabinetGoBackLink} />
        </IconWrap>
        <Title>Особистий кабінет</Title>
      </StyledLink>
    </Container>
  );
};

export default CabinetGoBackLink;
